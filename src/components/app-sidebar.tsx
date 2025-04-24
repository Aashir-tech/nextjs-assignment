import {

  Home,

  Settings,
  FileText,
  SquareUserRound,
  ChartNoAxesCombined,
  UsersRound,
  MonitorSmartphone,
  SquarePlay,
  Move,
  Bell,
  GalleryVerticalEnd,
  Headphones,
} from "lucide-react";

// import Subscribe from 'https://cdn-icons-png.flaticon.com/128/2989/2989849.png'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Content",
    url: "#",
    icon: FileText,
  },
  {
    title: "User",
    url: "#",
    icon: UsersRound,
  },
  {
    title: "Task",
    url: "#",
    icon: SquareUserRound,
  },
  {
    title: "App/Web",
    url: "#",
    icon: MonitorSmartphone,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Media",
    url: "#",
    icon: SquarePlay,
  },
  {
    title: "Customize",
    url: "#",
    icon: Move,
  },
  {
    title: "Notifications",
    url: "#",
    icon: Bell,
  },
  {
    title: "Subscription",
    url: "#",
    icon: GalleryVerticalEnd,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="font-mono">
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-midnight hover:text-white"
                  >
                    <a href={item.url} className="">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenuItem key={"contact"} className="list-none pt-2">
              <SidebarMenuButton asChild className="text-[16px]">
                <a href={"#"} className="">
                  <Headphones />
                  <span>{"Contact Support"}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
