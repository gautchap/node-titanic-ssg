import React from "react";
import PropTypes from "prop-types";
import "../client/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PageContextProvider } from "./usePageContext";
import { childrenPropType } from "./PropTypeValues";

export { PageShell };

PageShell.propTypes = {
    pageContext: PropTypes.any,
    children: childrenPropType,
};
function PageShell({ pageContext, children }) {
    return (
        <React.StrictMode>
            <PageContextProvider pageContext={pageContext}>
                <Content>{children}</Content>
            </PageContextProvider>
        </React.StrictMode>
    );
}

Layout.propTypes = {
    children: childrenPropType,
};
function Layout({ children }) {
    return (
        <div
            style={{
                display: "flex",
                maxWidth: 900,
                margin: "auto",
            }}
        >
            {children}
        </div>
    );
}

Sidebar.propTypes = {
    children: childrenPropType,
};
function Sidebar({ children }) {
    return (
        <div
            style={{
                padding: 20,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                lineHeight: "1.8em",
            }}
        >
            {children}
        </div>
    );
}

Content.propTypes = {
    children: childrenPropType,
};
function Content({ children }) {
    return (
        <div
            style={{
                padding: 20,
                paddingBottom: 50,
                borderLeft: "2px solid #eee",
                minHeight: "100vh",
            }}
        >
            {children}
        </div>
    );
}
