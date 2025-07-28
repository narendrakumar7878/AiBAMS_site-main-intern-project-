import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Pricing from "./pages/Pricing";
import About from "./pages/about";
import Career from "./pages/career";
import Updates from "./pages/updates";
import Grok from "./pages/grok";
import FusionSuite from "./pages/fusionsuite";
import Privacy from "./pages/privacy";
import Security from "./pages/security";
import Legal from "./pages/legal";
import Blog from "./pages/blog";
import SitemapFusion from "./pages/sitemapfusion";
import WebX from "./pages/webx";
import FusionChat from "./pages/fusionchat";
import FusionDocs from "./pages/fusiondocs";
import FusionSheets from "./pages/fusionsheets";
import FusionMail from "./pages/fusionmail";
import FusionDrive from "./pages/fusiondrive";
import { Component } from "lucide-react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/career" component={Career} />
      <Route path="/updates" component={Updates} />
      <Route path="/grok" component={Grok} />
      <Route path="/fusionsuite" component={FusionSuite} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/security" component={Security} />
      <Route path="/legal" component={Legal} />
      <Route path="/blog" component={Blog} />
      <Route path="/sitemapfusion" component={SitemapFusion} />
      <Route path="/webx" component={WebX} />
      <Route path="/fusionchat" component={FusionChat} />
      <Route path="/fusiondocs" component={FusionDocs} />
      <Route path="/fusionsheets" component={FusionSheets} />
      <Route path="/fusionmail" component={FusionMail} />
      <Route path="/fusiondrive" component={FusionDrive} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
