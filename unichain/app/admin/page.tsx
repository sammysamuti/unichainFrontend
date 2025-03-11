import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  BookOpen,
  MessageSquare,
  Wallet,
  AlertTriangle,
  CheckCircle,
  BarChart4,
  Activity,
  Shield,
} from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Welcome to the UniChain administration panel</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,853</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[75%] bg-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">187</div>
            <p className="text-xs text-muted-foreground">+5% from last semester</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[65%] bg-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">-12% from last week</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[25%] bg-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">System Health</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.7%</div>
            <p className="text-xs text-muted-foreground">+0.2% from yesterday</p>
            <div className="mt-4 h-1 w-full bg-muted">
              <div className="h-1 w-[98%] bg-green-500"></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Recent User Registrations</CardTitle>
                <CardDescription>New users who joined in the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Johnson",
                      email: "alex.johnson@university.edu",
                      type: "Student",
                      department: "Computer Science",
                      joined: "2 days ago",
                    },
                    {
                      name: "Sarah Williams",
                      email: "s.williams@university.edu",
                      type: "Faculty",
                      department: "Mathematics",
                      joined: "3 days ago",
                    },
                    {
                      name: "Michael Chen",
                      email: "m.chen@university.edu",
                      type: "Student",
                      department: "Engineering",
                      joined: "4 days ago",
                    },
                    {
                      name: "Emily Davis",
                      email: "e.davis@university.edu",
                      type: "Staff",
                      department: "Administration",
                      joined: "5 days ago",
                    },
                    {
                      name: "James Wilson",
                      email: "j.wilson@university.edu",
                      type: "Student",
                      department: "Business",
                      joined: "6 days ago",
                    },
                  ].map((user, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            user.type === "Student" ? "default" : user.type === "Faculty" ? "secondary" : "outline"
                          }
                        >
                          {user.type}
                        </Badge>
                        <div className="text-sm text-muted-foreground">{user.joined}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline">View All Users</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
                <CardDescription>Recent system notifications and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "System Maintenance",
                      description: "Scheduled maintenance on March 15, 2023 at 2:00 AM UTC",
                      type: "info",
                      time: "2 hours ago",
                    },
                    {
                      title: "High Server Load",
                      description: "Server load peaked at 85% during registration period",
                      type: "warning",
                      time: "5 hours ago",
                    },
                    {
                      title: "Database Backup Completed",
                      description: "Daily backup completed successfully",
                      type: "success",
                      time: "12 hours ago",
                    },
                    {
                      title: "Failed Login Attempts",
                      description: "Multiple failed login attempts detected from IP 192.168.1.254",
                      type: "error",
                      time: "1 day ago",
                    },
                  ].map((alert, i) => (
                    <div key={i} className="flex gap-3 rounded-lg border p-3">
                      <div
                        className={`mt-0.5 rounded-full p-1.5 ${
                          alert.type === "info"
                            ? "bg-blue-500/10 text-blue-500"
                            : alert.type === "warning"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : alert.type === "success"
                                ? "bg-green-500/10 text-green-500"
                                : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {alert.type === "info" ? (
                          <Activity className="h-4 w-4" />
                        ) : alert.type === "warning" ? (
                          <AlertTriangle className="h-4 w-4" />
                        ) : alert.type === "success" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Shield className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{alert.title}</div>
                        <div className="text-sm text-muted-foreground">{alert.description}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{alert.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>User Growth</CardTitle>
                <CardDescription>Monthly user registration trends</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center text-center">
                    <BarChart4 className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">User Growth Chart</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Monthly user registration data visualization would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Services</CardTitle>
                <CardDescription>System service status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Authentication", status: "Operational", uptime: "99.9%" },
                    { name: "Database", status: "Operational", uptime: "99.8%" },
                    { name: "Storage", status: "Operational", uptime: "100%" },
                    { name: "Blockchain", status: "Operational", uptime: "99.7%" },
                    { name: "API Gateway", status: "Operational", uptime: "99.9%" },
                  ].map((service, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="text-sm">{service.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="text-xs text-muted-foreground">{service.uptime}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Manage Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Course Management
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Wallet className="mr-2 h-4 w-4" />
                    Token Distribution
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Security Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Activity className="mr-2 h-4 w-4" />
                    System Logs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Analytics</CardTitle>
              <CardDescription>Detailed usage statistics and metrics</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center text-center">
                  <BarChart4 className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive analytics dashboard would appear here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Reports</CardTitle>
              <CardDescription>Generated reports and system analytics</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center text-center">
                  <BarChart4 className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Reports Dashboard</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    System reports and downloadable analytics would appear here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>Manage and send system-wide notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium">Send New Notification</h3>
                  <p className="text-sm text-muted-foreground">Create and send notifications to users</p>
                  <Button className="mt-2">Compose Notification</Button>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium">Notification Templates</h3>
                  <p className="text-sm text-muted-foreground">Manage reusable notification templates</p>
                  <Button variant="outline" className="mt-2">
                    Manage Templates
                  </Button>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-sm font-medium">Notification History</h3>
                  <p className="text-sm text-muted-foreground">View previously sent notifications</p>
                  <Button variant="outline" className="mt-2">
                    View History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

