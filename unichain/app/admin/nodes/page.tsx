import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Server,
  Activity,
  CheckCircle,
  RefreshCw,
  Clock,
  Database,
  HardDrive,
  Cpu,
  MemoryStickIcon as MemoryIcon,
} from "lucide-react"

export default function AdminNodesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Node Status</h1>
          <p className="text-muted-foreground">Monitor and manage UniChain network nodes</p>
        </div>
        <div className="flex gap-2">
          <Button className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh Status
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Nodes</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12/12</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <CheckCircle className="h-3 w-3" />
              <span>All nodes operational</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Network Health</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Excellent</div>
            <div className="mt-2">
              <Progress value={98} className="h-2" />
            </div>
            <div className="mt-1 text-xs text-muted-foreground">98% uptime in the last 30 days</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124ms</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <CheckCircle className="h-3 w-3" />
              <span>Within optimal range</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Consensus Status</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Synchronized</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <CheckCircle className="h-3 w-3" />
              <span>All nodes in consensus</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="logs">System Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Node Status Overview</CardTitle>
              <CardDescription>Current status of all nodes in the UniChain network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: "Node 1",
                    status: "Active",
                    uptime: "99.98%",
                    location: "University Data Center",
                    lastSync: "2 minutes ago",
                    load: 32,
                  },
                  {
                    id: "Node 2",
                    status: "Active",
                    uptime: "99.95%",
                    location: "University Data Center",
                    lastSync: "1 minute ago",
                    load: 28,
                  },
                  {
                    id: "Node 3",
                    status: "Active",
                    uptime: "99.97%",
                    location: "University Data Center",
                    lastSync: "Just now",
                    load: 35,
                  },
                  {
                    id: "Node 4",
                    status: "Warning",
                    uptime: "98.75%",
                    location: "Computer Science Department",
                    lastSync: "5 minutes ago",
                    load: 65,
                  },
                  {
                    id: "Node 5",
                    status: "Active",
                    uptime: "99.92%",
                    location: "Computer Science Department",
                    lastSync: "3 minutes ago",
                    load: 30,
                  },
                  {
                    id: "Node 6",
                    status: "Active",
                    uptime: "99.90%",
                    location: "Computer Science Department",
                    lastSync: "4 minutes ago",
                    load: 25,
                  },
                  {
                    id: "Node 7",
                    status: "Active",
                    uptime: "99.94%",
                    location: "Engineering Department",
                    lastSync: "2 minutes ago",
                    load: 27,
                  },
                  {
                    id: "Node 8",
                    status: "Active",
                    uptime: "99.91%",
                    location: "Engineering Department",
                    lastSync: "3 minutes ago",
                    load: 31,
                  },
                  {
                    id: "Node 9",
                    status: "Active",
                    uptime: "99.89%",
                    location: "Engineering Department",
                    lastSync: "1 minute ago",
                    load: 29,
                  },
                  {
                    id: "Node 10",
                    status: "Active",
                    uptime: "99.93%",
                    location: "Business School",
                    lastSync: "Just now",
                    load: 26,
                  },
                  {
                    id: "Node 11",
                    status: "Active",
                    uptime: "99.96%",
                    location: "Business School",
                    lastSync: "2 minutes ago",
                    load: 24,
                  },
                  {
                    id: "Node 12",
                    status: "Active",
                    uptime: "99.88%",
                    location: "Business School",
                    lastSync: "4 minutes ago",
                    load: 33,
                  },
                ].map((node, i) => (
                  <Card key={i}>
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{node.id}</CardTitle>
                        <Badge
                          variant="outline"
                          className={
                            node.status === "Active"
                              ? "bg-green-500/10 text-green-500"
                              : "bg-yellow-500/10 text-yellow-500"
                          }
                        >
                          {node.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Uptime:</span>
                          <span>{node.uptime}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Location:</span>
                          <span>{node.location}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Last Sync:</span>
                          <span>{node.lastSync}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Load:</span>
                            <span>{node.load}%</span>
                          </div>
                          <Progress value={node.load} className="h-1" />
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>CPU Usage</CardTitle>
                <CardDescription>Average CPU utilization across all nodes</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center text-center">
                    <Cpu className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">CPU Usage Chart</h3>
                    <p className="mt-2 text-sm text-muted-foreground">CPU usage visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Memory Usage</CardTitle>
                <CardDescription>Average memory utilization across all nodes</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center text-center">
                    <MemoryIcon className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Memory Usage Chart</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Memory usage visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Disk I/O</CardTitle>
                <CardDescription>Disk read/write operations across all nodes</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center text-center">
                    <HardDrive className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Disk I/O Chart</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Disk I/O visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Network Traffic</CardTitle>
                <CardDescription>Network throughput across all nodes</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <div className="flex h-full items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center text-center">
                    <NetworkIcon className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">Network Traffic Chart</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Network traffic visualization would appear here
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Logs</CardTitle>
              <CardDescription>Recent system logs from all nodes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border bg-muted/50 p-4 font-mono text-sm">
                <div className="space-y-2">
                  {[
                    {
                      timestamp: "2023-03-18 10:24:15",
                      level: "INFO",
                      node: "Node 3",
                      message: "Block #1,284,392 successfully validated and added to the chain",
                    },
                    {
                      timestamp: "2023-03-18 10:23:45",
                      level: "INFO",
                      node: "Node 7",
                      message: "Block #1,284,391 successfully validated and added to the chain",
                    },
                    {
                      timestamp: "2023-03-18 10:23:15",
                      level: "INFO",
                      node: "Node 1",
                      message: "Block #1,284,390 successfully validated and added to the chain",
                    },
                    {
                      timestamp: "2023-03-18 10:22:45",
                      level: "INFO",
                      node: "Node 5",
                      message: "Block #1,284,389 successfully validated and added to the chain",
                    },
                    {
                      timestamp: "2023-03-18 10:22:30",
                      level: "WARNING",
                      node: "Node 4",
                      message: "High CPU usage detected (65%), monitoring situation",
                    },
                    {
                      timestamp: "2023-03-18 10:22:15",
                      level: "INFO",
                      node: "Node 2",
                      message: "Block #1,284,388 successfully validated and added to the chain",
                    },
                    {
                      timestamp: "2023-03-18 10:21:45",
                      level: "INFO",
                      node: "Node 9",
                      message: "Block #1,284,387 successfully validated and added to the chain",
                    },
                    {
                      timestamp: "2023-03-18 10:21:30",
                      level: "INFO",
                      node: "Node 6",
                      message: "42 transactions processed in the last minute",
                    },
                    {
                      timestamp: "2023-03-18 10:21:15",
                      level: "INFO",
                      node: "Node 11",
                      message: "Network consensus achieved for block #1,284,386",
                    },
                    {
                      timestamp: "2023-03-18 10:21:00",
                      level: "ERROR",
                      node: "Node 4",
                      message: "Temporary network connectivity issue detected, reconnecting...",
                    },
                  ].map((log, i) => (
                    <div key={i} className="flex">
                      <span className="text-muted-foreground">{log.timestamp}</span>
                      <span
                        className={`ml-4 mr-2 ${
                          log.level === "INFO"
                            ? "text-blue-500"
                            : log.level === "WARNING"
                              ? "text-yellow-500"
                              : "text-red-500"
                        }`}
                      >
                        [{log.level}]
                      </span>
                      <span className="mr-2 text-primary">{log.node}:</span>
                      <span>{log.message}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button variant="outline" className="mt-4">
                View Full Logs
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function NetworkIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2h6v6H9zM9 16h6v6H9z" />
      <path d="M8 8H2v8h6" />
      <path d="M16 8h6v8h-6" />
      <path d="M9 8v8" />
      <path d="M15 8v8" />
    </svg>
  )
}

function MemoryIconComponent(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 19v-3" />
      <path d="M10 19v-3" />
      <path d="M14 19v-3" />
      <path d="M18 19v-3" />
      <path d="M8 11V9" />
      <path d="M16 11V9" />
      <path d="M12 11V9" />
      <path d="M2 15h20" />
      <path d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
    </svg>
  )
}

