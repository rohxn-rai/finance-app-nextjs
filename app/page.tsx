import Link from "next/link";

import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  TrendingUp,
  Shield,
  BarChart3,
  Wallet,
  PieChart,
  Target,
  CheckCircle,
  Users,
  ArrowRight,
} from "lucide-react";

const LandingHomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="flex flex-col text-center gap-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent leading-tight">
              Finance Tracker
            </h1>

            <h2 className="text-xl md:text-2xl text-foreground/80 font-medium max-w-3xl mx-auto">
              Transform your financial habits with our completely free personal
              finance management platform
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with modern technology, designed for real results. Take
              control of your financial future with powerful analytics, smart
              categorization, and enterprise-grade security - all completely
              free.
            </p>

            <Badge variant="secondary" className="w-fit mx-auto">
              🚀 100% Free Personal Finance Management
            </Badge>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link href="/login">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Tracking Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Features
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-chart-2" />
                Completely free
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-chart-2" />
                No hidden costs
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-chart-2" />
                Setup in 2 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="space-y-20 py-16">
        {/* Key Features Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold">Features</h3>
            <h4 className="text-2xl">
              Everything you need to manage your finances
            </h4>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to give you complete control over your
              financial life - all free, always
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-chart-1" />
                </div>
                <CardTitle className="text-xl">Multi-Type Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Monitor Income, Expenses, Investments, and Savings all in one
                  unified platform with real-time synchronization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle className="text-xl">Smart Categorization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Automatically organize expenses across Housing, Transport,
                  Health, Food, Education, and custom categories.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-xl">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Compare periods, track trends, and get actionable insights
                  with flexible time filters and visual dashboards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-chart-4" />
                </div>
                <CardTitle className="text-xl">Trend Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  View data across 24 hours to 12 months with intelligent
                  comparisons to track your financial progress.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-chart-5" />
                </div>
                <CardTitle className="text-xl">
                  Personalized Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Custom settings, user profiles, and responsive design that
                  works seamlessly across all your devices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Supabase authentication with industry-leading security,
                  real-time sync, and privacy-first approach.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Why Choose Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-bold">
              Why Choose FinanceTracker
            </h3>
            <h4 className="text-2xl">Built for Modern Financial Success</h4>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-chart-1 to-chart-1/70 flex items-center justify-center mx-auto">
                  <PieChart className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">
                  Lightning Fast Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Our Next.js-powered platform delivers incredible speed with a
                  beautiful, intuitive interface that makes financial management
                  actually enjoyable.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-chart-2 to-chart-2/70 flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">
                  Data-Driven Decisions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Make informed financial choices with powerful analytics that
                  reveal spending patterns, income trends, and investment
                  opportunities you might miss.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-chart-4 to-chart-4/70 flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">
                  Complete Financial Picture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Unlike basic expense trackers, get a comprehensive view of
                  your entire financial life with advanced categorization and
                  insights.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your Finances?
            </h3>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of users who have already taken control of their
              financial future with our completely free Finance Tracker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Link href="/login">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="ghost"
                className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/80 pt-4">
              100% Free • No signup required • No ads • Open source
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LandingHomePage;
