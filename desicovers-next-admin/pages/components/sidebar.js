import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import BuildIcon from "@mui/icons-material/Build";
import SettingsIcon from "@mui/icons-material/Settings";
import FolderIcon from "@mui/icons-material/Folder";
import { indigo } from "@mui/material/colors";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "next/link";

const drawerWidth = 300;

export default function Sidebar() {
    const productItems = [
        { name: "Bulk Add Product", link: "/add-product" },
        { name: "Add Single Product", link: "/add-single-product" },
        { name: "Show Product", link: "/show-product" },
        { name: "Add Pincode", link: "/add-pincode" },
        { name: "Tshirt Size", link: "/tshirt-size" },
        { name: "Bulk TshirtSize", link: "/bulk-tshirt-size" },
    ];

    const paymentItems = [
        { name: "Payment Recieve", link: "/payment-recieve" },
        { name: "Place Order", link: "/place-order" },
        { name: "Cancel Order", link: "/cancel-order" },
        { name: "Assign Money for Cancel Order", link: "/assign-money-cancel" },
        { name: "Customer Account", link: "/customer-account" },
        { name: "Wallet", link: "/wallet" },
    ];

    const offerItems = [
        { name: "Add Coupon", link: "/add-coupon" },
        { name: "Show Coupon", link: "/show-coupon" },
    ];

    const mobileItems = [
        { name: "Add Flip", link: "/add-flip" },
        { name: "Show Flip", link: "/show-flip" },
        { name: "Carousel", link: "/carousel" },
        { name: "Home Page Image", link: "/home-page-image" },
        { name: "Home Page Words", link: "/home-page-word" },
        { name: "Home Page Image", link: "/home-page-carousel-image" },
        { name: "Show Recent Arrival", link: "/show-recent-arrivals" },
    ];

    const mobileCoversItems = [
        { name: "Enter Mobile Cover", link: "/enter-mobile-cover" },
        { name: "Update Bulk Price", link: "/update-bulk-price" },
        { name: "Update Bulk description", link: "/update-bulk-desc" },
        { name: "Review", link: "/review" },
        { name: "Admin Heading", link: "/admin-heading" },
    ];

    const dashboardContent = [
        {item:productItems, title:"Products"},
        {item:paymentItems, title:"Customer"},
        {item:offerItems, title:"Offer"},
        {item:mobileItems, title:"Home Page"},
        {item:mobileCoversItems, title:"Mobile Page"},
    ];

    return (
        <Drawer
            sx={{
                width: "18%",
                height: "100%",
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: "18%",
                    boxSizing: "border-box",
                    bgcolor: indigo[400],
                    color: "#fff",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                <div className="logo-heading">
                    <div className="logo">
                        <TagFacesIcon sx={{ fontSize: 50 }} />
                        &emsp;&emsp;
                    </div>
                    <div className="heading">
                        DESICOVER
                        <br />
                        ADMIN<sup>2</sup>
                    </div>
                </div>

                <Divider sx={{ bgcolor: "#adadad" }} />
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText sx={{ py: 1 }} primary="Dashboard" />
                </ListItemButton>
                <Divider sx={{ bgcolor: "#adadad" }} />
                <div className="fadeword">INTERFACE</div>
            </List>
            <Divider sx={{ bgcolor: "#adadad" }} />
            {dashboardContent.map((items, index) => (
                <div key={index}>
                    <CollapsibleCustomComponent
                        item={items.item}
                        title={items.title}
                   />
                </div>
            ))}
        </Drawer>
    );
}

const CollapsibleCustomComponent = ({ item, title }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <ListItemButton onClick={() => setOpen(() => !open)}>
                <ListItemIcon>
                    <FolderIcon sx={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <div className="dropdown">
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <div className="drop-fade">BASIC SERVICES:</div>
                    <List component="div" disablePadding>
                        {item.map((text, index) => (
                            <Link href={text.link} key={index} passHref>
                                <ListItem sx={{ pl: 4 }} button key={text.name}>
                                    <ListItemText primary={text.name} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Collapse>
            </div>
        </>
    );
};
