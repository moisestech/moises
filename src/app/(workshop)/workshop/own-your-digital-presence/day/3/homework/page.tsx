import { ClipboardList, Code2, BarChart2, Zap, Activity, Settings, Search } from 'lucide-react'

export default function Day3HomeworkPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Day 3 Homework Challenges</h1>
        <p className="text-lg text-muted-foreground">
          Complete these challenges to enhance your website with advanced features and analytics.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Advanced Features */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Advanced Features</h2>
          </div>
          <p className="text-muted-foreground">
            Implement and test advanced website features to enhance user experience.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Code2 className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Add interactive elements and animations</li>
                    <li>Implement advanced navigation patterns</li>
                    <li>Create dynamic content sections</li>
                    <li>Test all interactive features</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Analytics Setup */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Analytics Setup</h2>
          </div>
          <p className="text-muted-foreground">
            Set up and configure website analytics to track performance.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <BarChart2 className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Install and configure analytics tools</li>
                    <li>Set up conversion tracking</li>
                    <li>Create custom event tracking</li>
                    <li>Configure goal tracking</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Performance Optimization */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Performance Optimization</h2>
          </div>
          <p className="text-muted-foreground">
            Optimize your website for speed and performance.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Zap className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Optimize image and media loading</li>
                    <li>Implement caching strategies</li>
                    <li>Minimize code and resources</li>
                    <li>Test and improve load times</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* User Experience */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6" />
            <h2 className="text-xl font-semibold">User Experience</h2>
          </div>
          <p className="text-muted-foreground">
            Enhance the overall user experience of your website.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Activity className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Conduct user testing sessions</li>
                    <li>Implement feedback mechanisms</li>
                    <li>Optimize navigation flow</li>
                    <li>Add accessibility features</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* SEO Enhancement */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Search className="h-6 w-6" />
            <h2 className="text-xl font-semibold">SEO Enhancement</h2>
          </div>
          <p className="text-muted-foreground">
            Improve your website's search engine optimization.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Search className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Optimize meta tags and descriptions</li>
                    <li>Create XML sitemap</li>
                    <li>Implement structured data</li>
                    <li>Set up canonical URLs</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Advanced Settings */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Advanced Settings</h2>
          </div>
          <p className="text-muted-foreground">
            Configure advanced website settings and features.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Settings className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Tasks</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Configure security settings</li>
                    <li>Set up backup systems</li>
                    <li>Implement error tracking</li>
                    <li>Configure advanced caching</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 