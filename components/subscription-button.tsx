'use client';

import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface SubscriptionButtonProps {
  isPro: boolean;
}

export function SubscriptionButton({ isPro }: SubscriptionButtonProps) {
  const [loading, setLoading] = useState(false);

  async function onClick() {
    try {
      setLoading(true);

      const response = await axios.get('/api/stripe');

      window.location.href = response.data.url;
    } catch (error) {
      toast.error('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      disabled={loading}
      variant={isPro ? 'default' : 'premium'}
      onClick={onClick}
    >
      {isPro ? 'Manage Subscription' : 'Upgrade'}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  );
}
