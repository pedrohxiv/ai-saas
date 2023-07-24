'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: 'John',
    title: 'Software Engineer',
    description:
      "This application is amazing! It's the best for project management and generating code snippets with AI. A game-changer for our team!",
  },
  {
    name: 'Mary',
    title: 'Graphic Designer',
    description:
      'Wow! This app is the best for showcasing my portfolio and creating visuals with AI. Love the artistic filters and animated videos!',
  },
  {
    name: 'Peter',
    title: 'Tech Blogger',
    description:
      "I'm impressed! This writing assistant is the best, and AI-generated conversational dialogues are a hit with readers!",
  },
  {
    name: 'Anna',
    title: 'Chef',
    description:
      "In love with this app! It's the best for recipe organization and AI-powered cooking tutorials in videos!",
  },
];

export function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{testimonial.name}</p>
                  <p className="text-zinc-400 text-sm">{testimonial.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                &quot;{testimonial.description}&quot;
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
