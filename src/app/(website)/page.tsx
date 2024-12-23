import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Home() {
  const plans = [
    {
      name: 'Free Plan',
      description: 'Ideal for beginners',
      price: '$0',
      features: [
        'Convert followers into fans through tailored messaging',
        'Increase engagement with personalized responses',
        'Automate reply comments to improve audience interaction',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Intelligent-AI Plan',
      description: 'For Professionals',
      price: '$99',
      features: [
        'All features from Free Plan',
        'Priority access to customer support',
        'Customizable branding options',
        'AI-driven response generation',
        'In-depth analytics and insights',
      ],
      cta: 'Subscribe Now',
    },
  ];

  return (
    <main>
      <section className="relative bg-gradient-to-b from-slate-900 via-[#292527] to-bg">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="container px-4 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-#FFFFFF flex items-center justify-center font-bold">
                  👉🏻
                </div>
                <span className="text-primary">I N S T A F O R C E</span>
              </div>
              <nav className="hidden space-x-6 text-sm text-blue-200 md:block">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#about">About</Link>
              </nav>
              <Button className="bg-[lavender] text-[#000000]">
                <Link href="/dashboard">Login</Link>
              </Button>
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Turn Followers into Fans with{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  InstaForce
                </span>
              </h1>
              <p className="mt-6 text-lg text-blue-200">
                Maximize your Instagram impact with InstaForce, turning effortless engagement and automated responses into profitable business opportunities.
              </p>

              <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" className="bg-[#FFFFFF] text-black hover:bg-[#ffeaa7]">
                  <Link href="/sign-up">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-[#FFFFFF] hover:bg-[#28282b]">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Image section */}
            <div className="flex flex-col sm:flex-row items-start justify-center mt-0 space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 mb-4 sm:mb-0">
              <div className="relative h-auto sm:h-[850px] sm:w-[600px] overflow-hidden group">
                <Image
                  src="/1.png"
                  alt="Community member"
                  height={3333}
                  width={5000}
                  className="object-contain transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-2"
                />
              </div>
              <div className="relative h-auto sm:h-[850px] sm:w-[600px] overflow-hidden group">
                <Image
                  src="/2.png"
                  alt="Community member"
                  height={3333}
                  width={5000}
                  className="object-contain transition-transform duration-300 group-hover:rotate-[10deg] group-hover:scale-105"
                />
              </div>
              <div className="relative h-auto sm:h-[850px] sm:w-[600px] overflow-hidden group">
                <Image
                  src="/3.png"
                  alt="Community member"
                  height={3333}
                  width={5000}
                  className="object-contain transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container w-full -mt-8 md:-mt-12 lg:-mt-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              style={{
                textShadow: '0 0 40px #ffe788, 0 0 40px #ffe788',
                color: '#FFFFFF',
              }}
            >
              Find Your Plan
            </h2>
            <p className="max-w-[900px] text-muted-foreground">
              Choose the best plan to grow your Instagram interactions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">{plan.cta}</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

            {/* Footer Section */}
            <section
              style={{
                background: 'linear-gradient(90deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
                minHeight: '250px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '40px',
                padding: '20px',
              }}
            >
        <p style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '500' }}>
          This Project is made with 🖤 by <span style={{ color: '#28282b' }}> @Piyush Raj</span>
        </p>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a
            href="https://www.instagram.com/piy777sus/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'color 0.3s',
            }}
          >
            <FaInstagram size={30} color="#fff" />
            <span style={{ color: '#fff', fontWeight: '500' }}>Instagram</span>
          </a>
          <a
            href="https://linkedin.com/in/piyush-raj-74211825b"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'color 0.3s',
            }}
          >
            <FaLinkedin size={30} color="#fff" />
            <span style={{ color: '#fff', fontWeight: '500' }}>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Piyusss"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'color 0.3s',
            }}
          >
            <FaGithub size={30} color="#fff" />
            <span style={{ color: '#fff', fontWeight: '500' }}>GitHub</span>
          </a>
        </div>
      </section>
    </main>
  );
}
