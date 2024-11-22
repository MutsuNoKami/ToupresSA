import Login from "./views/Login.js";
import Profile from "./views/Profile.js";
import Password from "./views/Password.js";
import Videos from "./views/Videos.js";
import Clients from "./views/Clients.js";
import NewClient from "./views/NewClient.js";
import Commissions from "./views/Commissions.js";
import AgentsTable from "./views/AgentsTable.js";
import Support from "./views/Support.js";
import Leads from "./views/Leads.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Login},
       
        { path: "/profile", view: Profile},
        { path: "/clients", view: Clients},
        { path: "/clients/add", view: NewClient},
        { path: "/clients/leads", view: Leads},
        { path: "/videos", view: Videos},
        { path: "/commissions", view: Commissions},
        { path: "/agents", view: AgentsTable},
        { path: "/support", view: Support}, 
        { path: "/profile/password", view: Password},
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});