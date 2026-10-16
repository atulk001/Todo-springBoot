import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import TaskLogo from "../../assets/logo/TaskFlowlogo.png";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="flex items-center justify-between px-8 py-1 border-b">

            {/* Logo */}
            <div className="">
                <img src={TaskLogo} alt="TaskFlow" className="  h-14 w-50" />
            </div>

            {/* Navigation Links */}
            <NavigationMenu >
                <NavigationMenuList className="flex gap-12 text-9xl" >

                    <NavigationMenuItem >
                        <NavigationMenuLink href="/">
                            Home
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href="#features">
                            Features
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink href="#about">
                            About
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

            {/* Authentication Buttons */}
            <div className="flex gap-3">
                <Button variant="outline">
                    <Link to="/login">
                        Login
                    </Link>
                </Button>

                <Button>
                    Get Started
                </Button>
            </div>

        </header>
    );
}

export default Navbar;