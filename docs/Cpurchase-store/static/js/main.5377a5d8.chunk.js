(this.webpackJsonpgihubit = this.webpackJsonpgihubit || []).push([
  [0],
  {
    45: function (e, t, s) { },
    69: function (e, t, s) {
      "use strict";
      s.r(t);
      var a = s(2),
        n = s(18),
        c = s(27),
        i = s.n(c),
        o = (s(38), s(39), s(40), s(19)),
        r = s(6),
        l = s(1),
        d = Object(a.createContext)();
      function j(e) {
        var t = e.children,
          s = localStorage.getItem("theme"),
          n = Object(a.useState)("" === s),
          c = Object(r.a)(n, 2),
          i = c[0],
          o = c[1];
        return Object(l.jsx)(d.Provider, {
          value: { setDarkTheme: o, darkTheme: i },
          children: t,
        });
      }
      s(44);
      var b = s(33),
        p = s(3),
        m = s(7),
        u = function () {
          return Object(l.jsx)("div", {
            className: "row align-items-center justify-content-center",
            children: Object(l.jsx)("div", {
              className: "col-12 col-md text-md-center text-lg-center",
              children: Object(l.jsxs)("p", {
                className: "ptf-footer-copyright has-black-color",
                children: [
                  "\xa9",
                  new Date().getFullYear(),
                  " ",
                  Object(l.jsx)("span", { children: "CodeinDevelopes" }),
                  ". All Rights Reserved.",
                ],
              }),
            }),
          });
        },
        h = (s(23), s(14)),
        x = [
          { name: "Introduction", routerPath: "/" },
          {
            name: "Customer(s)",
            dropDownItems: [
              { name: "Registration", routerPath: "/cpurchase-documentation/user" },
              { name: "Backend", routerPath: "/cpurchase-documentation/server" },
              { name: "Frontend", routerPath: "/cpurchase-documentation/front" },
              {
                name: "Mobile app",
                routerPath: "/cpurchase-documentation/mobile-app",
              },
            ],
          },
          {
            name: "Vendor(s)",
            dropDownItems: [
              {
                name: "Mobile app",
                routerPath: "/cpurchase-documentation/flutter-sdk",
              },
              {
                name: "Frontend",
                routerPath: "/cpurchase-documentation/local-front",
              },
              {
                name: "Backend",
                routerPath: "/cpurchase-documentation/local-server",
              },
            ],
          },
          {
            name: "Store keeper",
            dropDownItems: [
              {
                name: "Install on server",
                routerPath: "/cpurchase-documentation/mandatory-setup-backend",
              },
              {
                name: "Troubleshooting",
                routerPath: "/cpurchase-documentation/troubleshooting-backend",
              },
            ],
          },
          {
            name: "Admin",
            dropDownItems: [
              {
                name: "Install on server",
                routerPath: "/cpurchase-documentation/install-on-server",
              },
              {
                name: "Mandatory setup",
                routerPath: "/cpurchase-documentation/mandatory-setup",
              },
              {
                name: "Customization",
                routerPath: "/cpurchase-documentation/customization",
              },
              {
                name: "Troubleshooting",
                routerPath: "/cpurchase-documentation/troubleshooting-admin",
              },
            ],
          },
          {
            name: "C.O.O",
            dropDownItems: [
              {
                name: "Mandatory setup",
                routerPath: "/cpurchase-documentation/mandatory-setup-web",
              },
              {
                name: "Build code and setup on server",
                routerPath:
                  "/cpurchase-documentation/build-code-and-setup-on-server",
              },
            ],
          },
          {
            name: "Accountant",
            dropDownItems: [
              {
                name: "Mandatory setup",
                routerPath: "/cpurchase-documentation/mandatory-setup-customer",
              },
              {
                name: "Customization",
                routerPath: "/cpurchase-documentation/customization-customer",
              },
              {
                name: "App build & release",
                routerPath:
                  "/cpurchase-documentation/customer-app-build-release",
              },
            ],
          },
          {
            name: "Vendor Apps",
            dropDownItems: [
              {
                name: "Mandatory setup",
                routerPath: "/cpurchase-documentation/mandatory-setup-vendor",
              },
              {
                name: "Customization",
                routerPath: "/cpurchase-documentation/customization-vendor",
              },
              {
                name: "App build & release",
                routerPath: "/cpurchase-documentation/vendor-app-build-release",
              },
            ],
          },
          {
            name: "Deliveryboy Apps",
            dropDownItems: [
              {
                name: "Mandatory setup",
                routerPath:
                  "/cpurchase-documentation/mandatory-setup-deliveryboy",
              },
              {
                name: "Customization",
                routerPath: "/cpurchase-documentation/customization-deliveryboy",
              },
              {
                name: "App build & release",
                routerPath:
                  "/cpurchase-documentation/deliveryboy-app-build-release",
              },
            ],
          },
          {
            name: "Firebase setup",
            routerPath: "/cpurchase-documentation/firebase",
          },
          {
            name: "Update",
            dropDownItems: [
              {
                name: "Admin Panel",
                routerPath: "/cpurchase-documentation/update-admin-panel",
              },
              {
                name: "App & Web",
                routerPath: "/cpurchase-documentation/Update-app-web",
              },
            ],
          },
          {
            name: "Support plan",
            routerPath: "/cpurchase-documentation/support-plan",
          },
        ],
        O = function (e) {
          var t = e.handleClickMenu;
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)("div", {
                className: "ptf-offcanvas-menu__navigation",
                children: Object(l.jsx)(h.c, {
                  children: Object(l.jsx)(h.d, {
                    children: Object(l.jsx)(h.a, {
                      className: "sidebar-menu_wrapper",
                      children: x.map(function (e, s) {
                        var a, n;
                        return Object(l.jsx)(
                          "div",
                          {
                            children:
                              (null === (a = e.dropDownItems) || void 0 === a
                                ? void 0
                                : a.length) > 0
                                ? Object(l.jsx)(
                                  h.e,
                                  {
                                    title: e.name,
                                    children:
                                      null === (n = e.dropDownItems) ||
                                        void 0 === n
                                        ? void 0
                                        : n.map(function (e, s) {
                                          return Object(l.jsx)(
                                            h.b,
                                            {
                                              children: Object(l.jsx)(p.b, {
                                                to: e.routerPath,
                                                onClick: t,
                                                children: e.name,
                                              }),
                                            },
                                            s
                                          );
                                        }),
                                  },
                                  s
                                )
                                : Object(l.jsx)(h.b, {
                                  className: "sidebar-menu",
                                  children: Object(l.jsx)(p.b, {
                                    to: e.routerPath,
                                    children: e.name,
                                  }),
                                }),
                          },
                          s
                        );
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-offcanvas-menu__footer",
                children: Object(l.jsxs)("p", {
                  className: "ptf-offcanvas-menu__copyright",
                  children: [
                    "@",
                    new Date().getFullYear(),
                    " ",
                    Object(l.jsx)("span", { children: "CodeinDevelopers" }),
                    ". All Rights Reserved. ",
                    Object(l.jsx)("br", {}),
                  ],
                }),
              }),
            ],
          });
        },
        f = s(31),
        g = s(30),
        y = function () {
          var e = Object(a.useContext)(d),
            t = e.darkTheme,
            s = e.setDarkTheme;
          return (
            Object(a.useEffect)(
              function () {
                t
                  ? (document.documentElement.setAttribute(
                    "data-theme",
                    "dark"
                  ),
                    localStorage.setItem("theme", "dark"))
                  : (document.documentElement.removeAttribute("data-theme"),
                    localStorage.setItem("theme", "light"));
              },
              [t]
            ),
            Object(l.jsx)("div", {
              children:
                void 0 !== t &&
                Object(l.jsx)("button", {
                  className: "dark-theme",
                  onClick: function () {
                    return s(!t);
                  },
                  children: t
                    ? Object(l.jsx)(f.a, { size: 30, className: "text-white" })
                    : Object(l.jsx)(g.a, { size: 25, className: "text-white" }),
                }),
            })
          );
        },
        v = function () {
          var e = Object(a.useState)(!1),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = function () {
              return n(!s);
            };
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)("header", {
                className: "ptf-header--style-5 ptf-header--opaque",
                children: Object(l.jsx)("div", {
                  className: "ptf-navbar ptf-navbar--main ptf-navbar--sticky",
                  children: Object(l.jsx)("div", {
                    className: "container-xxl",
                    children: Object(l.jsxs)("div", {
                      className: "ptf-navbar-inner",
                      children: [
                        Object(l.jsx)(p.b, {
                          className: "ptf-navbar-logo",
                          to: "/",
                          children: Object(l.jsx)("h3", {
                            className: "text-white",
                            children: "Cpurchase Store",
                          }),
                        }),
                        Object(l.jsx)(y, {}),
                        Object(l.jsx)("div", {
                          className:
                            "ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right mobile-document-menu",
                          onClick: c,
                          children: Object(l.jsx)("i", {
                            className: "lnir lnir-menu-alt-5",
                          }),
                        }),
                        Object(l.jsx)("div", {
                          className:
                            "ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right",
                          onClick: c,
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              Object(l.jsxs)("div", {
                className: s
                  ? "ptf-offcanvas-menu is-open"
                  : "ptf-offcanvas-menu ",
                children: [
                  Object(l.jsxs)("div", {
                    className: "ptf-offcanvas-menu__header",
                    children: [
                      Object(l.jsx)("div", {
                        className: "ptf-language-switcher",
                      }),
                      Object(l.jsx)("span", {
                        className:
                          "ptf-offcanvas-menu-icon js-offcanvas-menu-toggle",
                        onClick: c,
                        children: Object(l.jsx)("i", {
                          className: "lnir lnir-close",
                        }),
                      }),
                    ],
                  }),
                  Object(l.jsx)(O, { handleClickMenu: c }),
                ],
              }),
            ],
          });
        },
        N = function () {
          return Object(l.jsx)("div", {
            className: "docMenu",
            children: Object(l.jsx)(h.c, {
              className: "pro-sidebar",
              children: Object(l.jsx)(h.d, {
                children: Object(l.jsx)(h.a, {
                  className: "sidebar-menu_wrapper",
                  children: x.map(function (e, t) {
                    var s, a;
                    return Object(l.jsx)(
                      "div",
                      {
                        children:
                          (null === (s = e.dropDownItems) || void 0 === s
                            ? void 0
                            : s.length) > 0
                            ? Object(l.jsx)(
                              h.e,
                              {
                                title: e.name,
                                defaultOpen: !0,
                                children:
                                  null === (a = e.dropDownItems) ||
                                    void 0 === a
                                    ? void 0
                                    : a.map(function (e, t) {
                                      return Object(l.jsx)(
                                        h.b,
                                        {
                                          children: Object(l.jsx)(p.c, {
                                            className: "nav-link-active",
                                            to: e.routerPath,
                                            children: e.name,
                                          }),
                                        },
                                        t
                                      );
                                    }),
                              },
                              t
                            )
                            : Object(l.jsx)(h.b, {
                              className: "sidebar-menu",
                              children: Object(l.jsx)(p.c, {
                                to: e.routerPath,
                                className: "nav-link-active",
                                children: e.name,
                              }),
                            }),
                      },
                      t
                    );
                  }),
                }),
              }),
            }),
          });
        },
        w = function () {
          return Object(l.jsxs)("div", {
            className: "docContainer",
            children: [
              Object(l.jsx)(o.a, {
                children: Object(l.jsx)("title", {
                  children: "Cpurchase- Store Documentation",
                }),
              }),
              Object(l.jsx)(v, {}),
              Object(l.jsxs)("div", {
                className: "ptf-main",
                children: [
                  Object(l.jsx)("div", {
                    className: "ptf-page ptf-page--contact",
                    children: Object(l.jsx)("section", {
                      children: Object(l.jsx)("div", {
                        className: "container-xxl",
                        children: Object(l.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(l.jsx)("div", {
                              className: "col-lg-3",
                              children: Object(l.jsx)("div", {
                                className: "docMenuContainer",
                                children: Object(l.jsx)(N, {}),
                              }),
                            }),
                            Object(l.jsx)("div", {
                              className: "col-lg-9 docContent",
                              children: Object(l.jsx)(m.a, {}),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  Object(l.jsx)("div", {
                    className: "ptf-spacer",
                    style: { "--ptf-xxl": "3rem", "--ptf-md": "2.5rem" },
                  }),
                ],
              }),
              Object(l.jsx)("footer", {
                className: "ptf-footer ptf-footer--style-5 ptf-footer-doc",
                children: Object(l.jsx)("div", {
                  className: "container-xxl",
                  children: Object(l.jsx)(u, {}),
                }),
              }),
            ],
          });
        },
        k = s(11),
        A = s(4),
        P = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsxs)("div", {
                className: "alert alert-primary mb-5",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "IMPORTANT NOTICE" }),
                    ],
                  }),
                  "iF you have any difficulty using a certain feature on this site and can't find a section which adresses such issue in this documentation kindly contact us immediately by Whatsapp 07043774402 or mail Surpport@codindevelopers.com.ng",
                ],
              }),
              Object(l.jsx)("h1", {
                className: "title",
                children: "Introduction",
              }),
              Object(l.jsxs)("strong", {
                className: "introduction-subTitle",
                children: [
                  "Welcome to the ",
                  Object(l.jsx)("strong", {
                    className: "strong",
                    children: "Cpurchase Store",
                  }),
                ],
              }),
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "introduction-img-container",
                children: [
                  Object(l.jsx)(A.b, {
                    children: Object(l.jsx)(A.a, {
                      children: Object(l.jsx)("a", {
                        href: "assets/img/doc/cpurchse_store.png",
                        "data-fancybox": !0,
                        rel: "nofollow",
                        children: Object(l.jsx)("img", {
                          src: "assets/img/doc/cpurchse_store.png",
                          alt: "admin",
                          loading: "lazy",
                          className: "img-responsive-full",
                        }),
                      }),
                    }),
                  }),
                  Object(l.jsx)(A.b, {
                    children: Object(l.jsx)(A.a, {
                      children: Object(l.jsx)("a", {
                        href: "assets/img/doc/cpurchse_admin.png",
                        "data-fancybox": !0,
                        rel: "nofollow",
                        children: Object(l.jsx)("img", {
                          src: "assets/img/doc/cpurchse_admin.png",
                          alt: "web main",
                          loading: "lazy",
                          className: "img-responsive-full",
                        }),
                      }),
                    }),
                  }),
                ],
              }),

              Object(l.jsx)("h3", {
                className: "introduction-title",
                children: "Overview",
              }),
              Object(l.jsxs)("strong", {
                className: "introduction-subTitle",
                children: [
                  "Getting ",
                  Object(l.jsx)("strong", {
                    className: "strong",
                    children: "Started",
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                children: [
                  "The Cpurchse Store is a digital market place where vendors and consumers can buy and sell all types of products",
                  Object(l.jsx)("br", {}),
                  "This documentation covers all the Features in the store component ",

                  Object(l.jsx)("div", { className: "line-break" }),
                  Object(l.jsx)("h3", {
                    className: "introduction-contentTitle",
                    children: "Customer",
                  }),
                  "\u2022 Store Registration ",
                  Object(l.jsx)("br", {}),
                  "\u2022 Affiliate Program",
                  Object(l.jsx)("br", {}),
                  "\u2022 Account settings",
                  Object(l.jsx)("br", {}),
                  "\u2022 Order management",
                  Object(l.jsx)("br", {}),
                  "\u2022 Payment ",
                  Object(l.jsx)("br", {}),
                  Object(l.jsx)("h3", {
                    className: "introduction-contentTitle",
                    children: "Vendor ",
                  }),
                  "\u2022 Admin web panel",
                  Object(l.jsx)("br", {}),
                  "\u2022 Manager web panel ",
                  Object(l.jsx)("br", {}),
                  "\u2022 Store web panel ",
                  Object(l.jsx)("br", {}),
                  "\u2022 Moderator web panel ",
                  Object(l.jsx)("br", {}),
                  "\u2022 Delivery boy web panel ",
                  
                  Object(l.jsx)("br", {}),
                  Object(l.jsx)("h3", {
                    className: "introduction-contentTitle",
                    children: "Shop Manager",
                  }),
                  "\u2022 Customer web site ",
                  Object(l.jsx)("br", {}),
      
                  Object(l.jsx)("h3", {
                    className: "introduction-contentTitle",
                    children: "Accountant ",
                  }),
                  "\u2022 Customer web site ",
                  Object(l.jsx)("h3", {
                    className: "introduction-contentTitle",
                    children: "Admin ",
                  }),
                  "\u2022 Customer web site ",
                  Object(l.jsx)("br", {}),
                  Object(l.jsx)("div", { className: "line-break" }),
                ],
              }),
              Object(l.jsx)("div", {
                className: "next-page-container",
                children: Object(l.jsxs)(p.b, {
                  to: "/cpurchase-documentation/user",
                  className: "btn  next",
                  children: [
                    Object(l.jsx)("p", { children: "Next" }),
                    Object(l.jsx)("p", {
                      className: "link",
                      children: " user ",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        T = s(12),
        S = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h4", { className: "title", children: "Registration" }),
              "A new user can register on the as either a user or vendor",
              Object(l.jsx)("br", {}),
              "This documentation covers all the Features in the store component ",
              Object(l.jsx)(A.b, {
                children: Object(l.jsx)(A.a, {
                  children: Object(l.jsx)("a", {
                    href: "assets/img/doc/cpurchse_admin.png",
                    "data-fancybox": !0,
                    rel: "nofollow",
                    children: Object(l.jsx)("img", {
                      src: "assets/img/doc/registration.png",
                      alt: "web main",
                      loading: "lazy",
                      className: "img-responsive-full",
                    }),
                  }),
                }),
              }),

              Object(l.jsx)("br", {}),
              Object(l.jsx)("h3", {
                className: "introduction-contentTitle",
                children: "Tools",
              }),
              "\u2022 For Mobile development: Visual Studio Code or Android studio , SDK and JDK with path setup in your IDE ",
              Object(l.jsx)("br", {}),
              "\u2022 For Backend development: Open Server Panel , XAMPP , Wamp Server , PhpStorm ",
              Object(l.jsx)("br", {}),
              "\u2022 For Frontend development: Nodejs , Visual Studio Code or WebStorm ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("h3", {
                className: "introduction-contentTitle",
                children: "Knowledge",
              }),
              "\u2022 For Mobile development: Dart , Flutter , basic Java and basic Swift knowledge ",
              Object(l.jsx)("br", {}),
              "\u2022 For Backend development: PHP , MySQL , Laravel ",
              Object(l.jsx)("br", {}),
              "\u2022 For Frontend development: Next Js , React Js, Google map , Firebase ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-4",
                role: "alert",


                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(T.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "WARNING" }),
                    ],
                  }),
                  "We would like to notify that the Envato price doesn\u2019t include any kind of installation and app publishing support. We kindly ask you to follow the documentation step by step for installation, setup and other branding related changes. Please note that, we bear no responsibility for your mistake. You are fully in charge for any kind of customizations made by your own.",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "Note" }),
                    ],
                  }),
                  Object(l.jsx)("p", {
                    className: "h5",
                    children:
                      "The terminal in your server should support nodejs",
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Introduction ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/server",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Backend ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        C = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Backend requirements",
              }),
              Object(l.jsx)("ul", {
                children: Object(l.jsx)("li", { children: "PHP v8.0+" }),
              }),
              Object(l.jsx)("ul", {
                children: Object(l.jsxs)("li", {
                  children: [
                    "Following extension have to be installed and enabled in your php:",
                    Object(l.jsxs)("ul", {
                      children: [
                        Object(l.jsx)("li", { children: "openssl" }),
                        Object(l.jsx)("li", { children: "fileinfo" }),
                        Object(l.jsx)("li", { children: "gd" }),
                        Object(l.jsx)("li", { children: "curl" }),
                        Object(l.jsx)("li", { children: "sodium" }),
                        Object(l.jsx)("li", { children: "zip" }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 MySQL 5.7+ ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-4",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(T.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "WARNING" }),
                    ],
                  }),
                  "Please do this very carefully. We bear no responsibility for your mistake.",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/user",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " user ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/front",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Frontend ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        I = s(32),
        M = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Mobile app",
              }),
              "\u2022 Android studio ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "alert alert-success mt-4",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(I.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: " TIP" }),
                    ],
                  }),
                  "You can download android studio via this link: ",
                  Object(l.jsx)("br", {}),
                  Object(l.jsx)("a", {
                    href: "https://developer.android.com/studio?gclid=CjwKCAiAiKuOBhBQEiwAId_sK4X0PLQrES_2pG_S8nPflALgWSOCUEqRRAFpbS4AmR5mXmU6hIhvHxoCfBgQAvD_BwE&gclsrc=aw.ds",
                    children:
                      "https://developer.android.com/studio?gclid=CjwKCAiAiKuOBhBQEiwAId_sK4X0PLQrES_2pG_S8nPflALgWSOCUEqRRAFpbS4AmR5mXmU6hIhvHxoCfBgQAvD_BwE&gclsrc=aw.ds",
                  }),
                ],
              }),
              "\u2022 Flutter SDK setup (version 3.7.3",
              " ",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "Stable",
              }),
              ") ",
              Object(l.jsx)("br", {}),
              "\u2022 JDK with path setup (only for vs code) ",
              Object(l.jsx)("br", {}),
              "\u2022 Xcode for IPA file build ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/front",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Frontend ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/flutter-sdk",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mobile App ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        _ = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Mobile app",
              }),
              Object(l.jsx)("p", {
                className: "inner-text",
                children:
                  "Please download and setup flutter from flutter.dev. You can find documentation for your own device via the following links.",
              }),
              "Windows:",
              " ",
              Object(l.jsx)("a", {
                href: "https://docs.flutter.dev/get-started/install/windows",
                className: "introduction-link",
                children:
                  "https://docs.flutter.dev/get-started/install/windows",
              }),
              Object(l.jsx)("br", {}),
              "Mac:",
              " ",
              Object(l.jsx)("a", {
                href: "https://docs.flutter.dev/get-started/install/macos",
                className: "introduction-link",
                children: "https://docs.flutter.dev/get-started/install/macos",
              }),
              Object(l.jsx)("br", {}),
              "Linux:",
              " ",
              Object(l.jsx)("a", {
                href: "https://docs.flutter.dev/get-started/install/linux",
                className: "introduction-link",
                children: "https://docs.flutter.dev/get-started/install/linux",
              }),
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mobile-app",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mobile App ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/local-front",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Frontend Local ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        F = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", { className: "title", children: "Backend" }),
              Object(l.jsxs)("p", {
                className: "inner-text",
                children: [
                  " ",
                  "To run backend in your local machine, install one of these programs in your computer:",
                  " ",
                ],
              }),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("div", {
                className: "iframe-wrapper",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/xy3qeGYQNtw",
                  title: "How to setup Docker on MacOS",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
              }),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("br", {}),
              Object(l.jsx)("h3", {
                className: "introduction-contentTitle",
                children: " Xampp:",
              }),
              " ",
              Object(l.jsx)("a", {
                href: "https://www.apachefriends.org/download.html",
                className: "introduction-link",
                children: "https://www.apachefriends.org/download.html",
              }),
              Object(l.jsx)("br", {}),
              Object(l.jsx)("h3", {
                className: "introduction-contentTitle",
                children: "WampServer:",
              }),
              " ",
              Object(l.jsx)("a", {
                href: "https://www.wampserver.com/en/",
                className: "introduction-link",
                children: "https://www.wampserver.com/en/",
              }),
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/local-front",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: "Frontend",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-backend",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Install on server ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        R = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: " Install on server",
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "INFO" }),
                    ],
                  }),
                  "Change title inside /public/index.html",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "INFO" }),
                    ],
                  }),
                  "Thus to install admin_panel, we need subdomains like admin.xyz.com and api.xyz.com.",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-warning mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "Warning" }),
                    ],
                  }),
                  "You have to set SSL certificate for your admin website. Some functions doesn't work if your website doesn't have SSL certificate.",
                ],
              }),
              "\u2022 Download the code from codecayon ",
              Object(l.jsx)("br", {}),
              "\u2022 Extract the zip files",
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsxs)("p", {
                className: "mb-0",
                children: [
                  "\u2022 Create the ",
                  Object(l.jsx)("strong", { children: "build" }),
                  " File",
                ],
              }),
              Object(l.jsxs)("p", {
                children: [
                  "In your application's root directory, run ",
                  Object(l.jsx)("strong", { children: "yarn install " }),
                  "to install the updated dependencies. Once this has finished, the next command you'll run is ",
                  Object(l.jsx)("strong", { children: "yarn build" }),
                  " (",
                  Object(l.jsx)("strong", { children: "npm install" }),
                  " and ",
                  Object(l.jsx)("strong", { children: "npm build" }),
                  " work, too).",
                ],
              }),
              Object(l.jsxs)("p", {
                children: [
                  "You'll notice this creates a new directory in your project called",
                  Object(l.jsx)("strong", { children: " build" }),
                  ". The build folder is essentially a super-compressed version of your program that has everything your browser needs to identify and run your app.",
                ],
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/build.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/build.png",
                        alt: "admin config",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", {
                className: "mb-0",
                children: "\u2022 Connect to cPanel",
              }),
              Object(l.jsx)("p", {
                children:
                  "Your cPanel manager should look something like this:",
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/c-pannel.webp",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/c-pannel.webp",
                        alt: "admin config",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsxs)("p", {
                className: "mb-0",
                children: [
                  "\u2022 Add the Build File Contents to ",
                  Object(l.jsx)("strong", { children: "public_html" }),
                ],
              }),
              Object(l.jsxs)("p", {
                children: [
                  "Navigate to the build file in your app's root directory. Open it up and select all the contents ",
                  Object(l.jsx)("strong", {
                    children: "inside the build file.",
                  }),
                  " If you upload the entire build file itself, the process will not work.",
                ],
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/build-file.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/build-file.png",
                        alt: "admin config",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsxs)("p", {
                children: [
                  "Once you've copied all the contents inside the build file, upload them into ",
                  Object(l.jsx)("strong", { children: "public_html." }),
                ],
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsxs)("p", {
                className: "mb-0",
                children: [
                  "\u2022 Create and Upload the ",
                  Object(l.jsx)("strong", { children: ".htaccess" }),
                  " File",
                ],
              }),
              Object(l.jsxs)("p", {
                children: [
                  "In order for the routes to work in your React app, you need to add a",
                  Object(l.jsx)("strong", { children: ".htaccess" }),
                  " file. In the ",
                  Object(l.jsx)("strong", { children: "public_html" }),
                  "folder, at the same level as the ",
                  Object(l.jsx)("strong", { children: "build" }),
                  " file contents, add a new file and name it ",
                  Object(l.jsx)("strong", { children: ".htaccess." }),
                ],
              }),
              Object(l.jsx)("p", {
                children:
                  "Edit the file and insert the following boilerplate information:",
              }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("p", {
                  children: [
                    "<IfModule mod_rewrite.c>",
                    Object(l.jsx)("br", {}),
                    " RewriteEngine On",
                    Object(l.jsx)("br", {}),
                    " RewriteBase /",
                    Object(l.jsx)("br", {}),
                    "RewriteRule ^index.html$ - [L]",
                    Object(l.jsx)("br", {}),
                    "RewriteCond %{REQUEST_FILENAME} !-f",
                    Object(l.jsx)("br", {}),
                    "RewriteCond %{REQUEST_FILENAME} !-d",
                    Object(l.jsx)("br", {}),
                    "RewriteCond %{REQUEST_FILENAME} !-l",
                    Object(l.jsx)("br", {}),
                    "RewriteRule . /index.html [L]",
                    Object(l.jsx)("br", {}),
                    "</IfModule>",
                  ],
                }),
              }),
              Object(l.jsx)(A.b, {
                children: Object(l.jsx)(A.a, {
                  children: Object(l.jsx)("a", {
                    href: "./assets/img/food-doc/hta-2.webp",
                    "data-fancybox": !0,
                    rel: "nofollow",
                    children: Object(l.jsx)("img", {
                      src: "./assets/img/food-doc/hta-2.webp",
                      alt: "admin config",
                      loading: "lazy",
                      className: "img-responsive-full",
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("p", { children: "Save the file." }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("iframe", {
                width: "100%",
                height: "420",
                src: "https://www.youtube.com/embed/HMUKllwbY2s",
                title: "YouTube video player",
                frameborder: "0",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowfullscreen: !0,
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/troubleshooting-backend",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Broubleshooting backend ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        E = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: " Mandatory setup",
              }),
              Object(l.jsx)("h5", {
                className: "introduction-contentTitle",
                children: " Map Configuration",
              }),
              "A client should get ",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "Map API",
              }),
              " from Google in order to enable the maps into the panels.",
              Object(l.jsxs)("h5", {
                className: "introduction-contentTitle",
                children: [" ", "Firebase Configuration (for notification)"],
              }),
              "The Firebase Push Notification will send messages for every order status. If admin turn on the status, customers, store, delivery man will get status notification when order status changed and if he turned off that then no one will get that message. To set up firebase notification go to admin panel\u2019s ",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "Notification settings",
              }),
              " ",
              "menu.",
              Object(l.jsx)("h5", {
                className: "introduction-contentTitle",
                children: " Payment Configuration",
              }),
              "Here, Admin will be introduced with the payment gateways. Cash on delivery, Digital Payment like Razor pay, Paypal, Stripe, Paystack, MercadoPago, Payment accept are available for payment gateways. Admin can make the necessary setup to make the status active or inactive for mentioned payment gateways.",
              Object(l.jsx)("h5", {
                className: "introduction-contentTitle",
                children: " SMS Module Configuration",
              }),
              "SMS Module is utilized for SMS Gateways for OTP sending in the simplest way of user verification. Customer will receive OTP when they create their own account or it is used for password recovery.",
              Object(l.jsx)("h5", {
                className: "introduction-contentTitle",
                children: " Firebase configuration",
              }),
              Object(l.jsx)("span", {
                className: "youtube-blog",
                children: Object(l.jsx)("iframe", {
                  src: "https://www.youtube.com/embed/OLwNp_e5bxM",
                  title: "YouTube video player",
                  frameborder: "11",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                }),
              }),
              Object(l.jsxs)("h5", {
                className: "introduction-contentTitle",
                children: [" ", "Firebase auth configuration"],
              }),
              Object(l.jsx)("span", {
                className: "youtube-blog",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/5HzrGiY9cFo",
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: !0,
                }),
              }),
              Object(l.jsxs)("h5", {
                className: "introduction-contentTitle",
                children: [" ", "Firebase chat configuration"],
              }),
              Object(l.jsx)("span", {
                className: "youtube-blog",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/29ARDVIXvXk",
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: !0,
                }),
              }),
              Object(l.jsxs)("h5", {
                className: "introduction-contentTitle",
                children: [" ", "Firebase notification configuration"],
              }),
              Object(l.jsx)("span", {
                className: "youtube-blog",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/3E-kEe5X2bg",
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: !0,
                }),
              }),
              Object(l.jsxs)("h5", {
                className: "introduction-contentTitle",
                children: [" ", "How to connect firebase to project"],
              }),
              Object(l.jsx)("span", {
                className: "youtube-blog",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/jCgZZiz1480",
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: !0,
                }),
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/install-on-server",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Install on server ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customization",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Customization",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        z = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Customization",
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Translate admin panel",
              }),
              "\u2022 Translation admin panel is very easy. To translate admin panel, open",
              " ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("span", {
                className: "introduction-step-2",
                children: ["Settings", ">", " Translations menu"],
              }),
              "and Translate all words into your language.",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "introduction-img-container",
                children: [
                  Object(l.jsx)(A.b, {
                    children: Object(l.jsx)(A.a, {
                      children: Object(l.jsx)("a", {
                        href: "./assets/img/doc/translation2.jpg",
                        "data-fancybox": !0,
                        rel: "nofollow",
                        children: Object(l.jsx)("img", {
                          src: "./assets/img/doc/translation2.jpg",
                          alt: "image",
                          loading: "lazy",
                          className: "img-responsive-full",
                        }),
                      }),
                    }),
                  }),
                  Object(l.jsx)(A.b, {
                    children: Object(l.jsx)(A.a, {
                      children: Object(l.jsx)("a", {
                        href: "./assets/img/doc/translation1.jpg",
                        "data-fancybox": !0,
                        rel: "nofollow",
                        children: Object(l.jsx)("img", {
                          src: "./assets/img/doc/translation1.jpg",
                          alt: "image",
                          loading: "lazy",
                          className: "img-responsive-full",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup Admin Panel ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/troubleshooting-admin",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Troubleshooting admin",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Y = s(8),
        B = s(10),
        D = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: " Mandatory setup",
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "INFO" }),
                    ],
                  }),
                  "The same documentation for Delivery app",
                ],
              }),
              Object(l.jsxs)("h4", {
                className: "introduction-contentTitle",
                children: [" ", "Run an existing flutter project on IDE", " "],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change App Logo ",
              }),
              "You can generate app icon using this website https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html ",
              Object(l.jsx)("br", {}),
              "\u2022 Then go to",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /android/app/src/main/res",
              }),
              "and replace all mipmap folder with your /android folder ",
              Object(l.jsx)("br", {}),
              "\u2022 Again go to ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/ios/Runner",
              }),
              " and replace Assets.xcassets with your generated Assets.xcassets folder ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change App Name ",
              }),
              Object(l.jsxs)("div", {
                className: "mt-4 mb-3",
                children: [
                  "1.Change the value of label from",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "/android/app/src/main/AndroidManifest.xml",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/android/app/src/main/AndroidManifest.xml",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsx)("span", {
                            children: 'android:label="My App"',
                          }),
                          Object(l.jsx)("span", {
                            className: 2 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c('android:label="My App"\u2019', 2);
                            },
                            children: 2 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "mt-4 mb-3",
                children: [
                  "2.Change the value of CFBundleName from",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: " /iOS/Runner/info.plist",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/iOS/Runner/info.plist",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsxs)("span", {
                            children: [
                              "<key>CFBundleName</key>",
                              " ",
                              Object(l.jsx)("br", {}),
                              "<string>My App</string>",
                            ],
                          }),
                          Object(l.jsx)("span", {
                            className: 3 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c(
                                "<key>CFBundleName</key><string>My App</string>",
                                3
                              );
                            },
                            children: 3 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change Base URL",
              }),
              "Please do NOT put slash ( / ) at the end of your base url. Use your admin url as base url. First you have to install your admin panel. For example: If your admin url is",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " https://your_domain.com/admin",
              }),
              "then base url will be https://your_domain.com. Open",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [" ", "/lib/src/core/constants/app_constants.dart"],
              }),
              "and replace baseUrl variable value with your own URL.",
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsx)("p", {
                    children: "/lib/src/core/constants/app_constants.dart",
                  }),
                  Object(l.jsx)("hr", {}),
                  Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsxs)("span", {
                        className: "ps-0",
                        children: [
                          "static const String baseUrl=",
                          Object(l.jsx)("span", {
                            className: "text-black",
                            children: "'https://your_domain.com'",
                          }),
                        ],
                      }),
                      Object(l.jsx)("span", {
                        className: 4 === s ? "bg-success copy" : "copy",
                        onClick: function () {
                          return c("baseUrl=https://your_domain.com", 4);
                        },
                        children: 4 === s ? "copied!" : "copy",
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/doc/mobile-1.jpg",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/doc/mobile-1.jpg",
                        alt: "image",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Package",
              }),
              "Firstly, find out the existing package name. You can find it out from top of",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/app/src/main/AndroidManifest.xml",
              }),
              "file. Then right click on project folder from android studio and click on",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "replace in path",
              }),
              "You will see a popup window with two input boxes. In first box you have to put existing package name that you saw in",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "AndroidManifest.xml",
              }),
              "file previously and then write down your preferred package name in second box and then click on",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "Replace All",
              }),
              " button.",
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Setup Firebase for Push Notification",
              }),
              "\u2022 Firstly, change your package name. If you didn\u2019t then go to this link",
              " ",
              Object(l.jsx)("br", {}),
              "\u2022 Create your own firebase project from",
              " ",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://console.firebase.google.com ",
              }),
              "and also add there an android app with your own package name and app name",
              " ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-4",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(T.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "WARNING" }),
                    ],
                  }),
                  "Please do NOT create multiple projects if you have multiple app like User App, Delivery App. Create only one project and add multiple apps under one project.",
                ],
              }),
              "\u2022 Click register app and download google-services.json file from there.",
              " ",
              Object(l.jsx)("br", {}),
              "\u2022 Copy that file and paste it under",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /android/app/ folder",
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Create a totally white png logo for notification icon. Paste it on",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [" ", "/android/app/src/main/res/drawable/"],
              }),
              "and replace notification_icon.png with your whiter version logo. ",
              Object(l.jsx)("br", {}),
              "\u2022 For IOS again create an app under the same project and download",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "GoogleService-Info.plist",
              }),
              "and paste it under",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/iOS/ folder",
              }),
              " ",
              Object(l.jsx)("br", {}),
              "Also you are advised to follow this documentation for full setup for IOS:",
              Object(l.jsxs)("strong", {
                className: "strong",
                children: [
                  " ",
                  "https://firebase.flutter.dev/docs/messaging/apple-integration",
                  " ",
                ],
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Paste firebase server key into admin panel Notification Settings section. You can receive server key from",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [
                  "Firebase project settings",
                  "->",
                  "Cloud Messaging",
                  "->",
                  " Server Key",
                  " ",
                ],
              }),
              Object(l.jsx)("br", {}),
              "After setup, please restart your IDE and uninstall your previously installed app, and then run it. Also do NOT try to test it on emulator or simulator. Emulator and simulators are unable to get push. Use real device for this purpose.",
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Add Google Map API Key",
              }),
              "\u2022 Please generate the google API key. You can visit this link - https://developers.google.com/maps/documentation/embed/get-api-key ",
              Object(l.jsx)("br", {}),
              "\u2022 You need to enable mentioned APIs: Direction API, Distance Matrix API, Geocoding API, Maps SDK for Android, Maps SDK for iOS, Place API. ",
              Object(l.jsx)("br", {}),
              "\u2022 Then you have to enable billing account. Visit this URL for activation: https://support.google.com/googleapi/answer/6158867?hl=en ",
              Object(l.jsx)("br", {}),
              "\u2022 After generating API key, you have to paste it on 3 different places: Android, iOS and web. ",
              Object(l.jsx)("br", {}),
              "For android, open",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/android/app/src/main/AndroidManifest.xml",
              }),
              " ",
              "and place the value of",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "com.google.android.geo.API_KEY ",
              }),
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsx)("p", {
                    children: " /android/app/src/main/AndroidManifest.xml",
                  }),
                  Object(l.jsx)("hr", {}),
                  Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsx)("span", {
                        className: "ps-0",
                        children:
                          '<meta-data android:name="com.google.android.geo.API_KEY" android:value=\u201cYOUR_MAP_API_KEY_HERE\u201d/>',
                      }),
                      Object(l.jsx)("span", {
                        className: 5 === s ? "bg-success copy" : "copy",
                        onClick: function () {
                          return c(
                            '<meta-data android:name="com.google.android.geo.API_KEY" android:value=\u201cYOUR_MAP_API_KEY_HERE\u201d/>',
                            5
                          );
                        },
                        children: 5 === s ? "copied!" : "copy",
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "mt-4",
                children: [
                  "For iOS: open",
                  " ",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "/iOS/Runner/AppDelegate.swift",
                  }),
                  "and place the value of",
                  " ",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "GMSServices.provideAPIKey",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/iOS/Runner/AppDelegate.swift",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsx)("span", {
                            className: "ps-0",
                            children:
                              'GMSServices.provideAPIKey(\u201cYOUR_MAP_API_KEY_HERE")',
                          }),
                          Object(l.jsx)("span", {
                            className: 6 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c(
                                'GMSServices.provideAPIKey(\u201cYOUR_MAP_API_KEY_HERE")',
                                6
                              );
                            },
                            children: 6 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/build-code-and-setup-on-server",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Build code and setup -on-server ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customization-mobile",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Customization Mobile App ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        U = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: " Mandatory setup",
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "INFO" }),
                    ],
                  }),
                  "The same documentation for Delivery app",
                ],
              }),
              Object(l.jsxs)("h4", {
                className: "introduction-contentTitle",
                children: [" ", "Run an existing flutter project on IDE", " "],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change App Logo ",
              }),
              "You can generate app icon using this website https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html ",
              Object(l.jsx)("br", {}),
              "\u2022 Then go to",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /android/app/src/main/res",
              }),
              "and replace all mipmap folder with your /android folder ",
              Object(l.jsx)("br", {}),
              "\u2022 Again go to ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/ios/Runner",
              }),
              " and replace Assets.xcassets with your generated Assets.xcassets folder ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change App Name ",
              }),
              Object(l.jsxs)("div", {
                className: "mt-4 mb-3",
                children: [
                  "1.Change the value of label from",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "/android/app/src/main/AndroidManifest.xml",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/android/app/src/main/AndroidManifest.xml",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsx)("span", {
                            children: 'android:label="My App"',
                          }),
                          Object(l.jsx)("span", {
                            className: 2 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c('android:label="My App"\u2019', 2);
                            },
                            children: 2 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "mt-4 mb-3",
                children: [
                  "2.Change the value of CFBundleName from",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: " /iOS/Runner/info.plist",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/iOS/Runner/info.plist",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsxs)("span", {
                            children: [
                              "<key>CFBundleName</key>",
                              " ",
                              Object(l.jsx)("br", {}),
                              "<string>My App</string>",
                            ],
                          }),
                          Object(l.jsx)("span", {
                            className: 3 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c(
                                "<key>CFBundleName</key><string>My App</string>",
                                3
                              );
                            },
                            children: 3 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change Base URL",
              }),
              "Please do NOT put slash ( / ) at the end of your base url. Use your admin url as base url. First you have to install your admin panel. For example: If your admin url is",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " https://your_domain.com/admin",
              }),
              "then base url will be https://your_domain.com. Open",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [" ", "/lib/infrastructure/services/constants.dart"],
              }),
              "and replace baseUrl variable value with your own URL.",
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsx)("p", {
                    children: "/lib/infrastructure/services/constants.dart",
                  }),
                  Object(l.jsx)("hr", {}),
                  Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsxs)("span", {
                        className: "ps-0",
                        children: [
                          "static const String baseUrl=",
                          Object(l.jsx)("span", {
                            className: "text-black",
                            children: "'https://your_domain.com'",
                          }),
                        ],
                      }),
                      Object(l.jsx)("span", {
                        className: 4 === s ? "bg-success copy" : "copy",
                        onClick: function () {
                          return c("baseUrl=https://your_domain.com", 4);
                        },
                        children: 4 === s ? "copied!" : "copy",
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/doc/driver1.jpg",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/doc/driver1.jpg",
                        alt: "image",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Package",
              }),
              "Firstly, find out the existing package name. You can find it out from top of",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/app/src/main/AndroidManifest.xml",
              }),
              "file. Then right click on project folder from android studio and click on",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "replace in path",
              }),
              "You will see a popup window with two input boxes. In first box you have to put existing package name that you saw in",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "AndroidManifest.xml",
              }),
              "file previously and then write down your preferred package name in second box and then click on",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "Replace All",
              }),
              " button.",
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Setup Firebase for Push Notification",
              }),
              "\u2022 Firstly, change your package name. If you didn\u2019t then go to this link",
              " ",
              Object(l.jsx)("br", {}),
              "\u2022 Create your own firebase project from",
              " ",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://console.firebase.google.com ",
              }),
              "and also add there an android app with your own package name and app name",
              " ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-4",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(T.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "WARNING" }),
                    ],
                  }),
                  "Please do NOT create multiple projects if you have multiple app like User App, Delivery App. Create only one project and add multiple apps under one project.",
                ],
              }),
              "\u2022 Click register app and download google-services.json file from there.",
              " ",
              Object(l.jsx)("br", {}),
              "\u2022 Copy that file and paste it under",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /android/app/ folder",
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Create a totally white png logo for notification icon. Paste it on",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [" ", "/android/app/src/main/res/drawable/"],
              }),
              "and replace notification_icon.png with your whiter version logo. ",
              Object(l.jsx)("br", {}),
              "\u2022 For IOS again create an app under the same project and download",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "GoogleService-Info.plist",
              }),
              "and paste it under",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/iOS/ folder",
              }),
              " ",
              Object(l.jsx)("br", {}),
              "Also you are advised to follow this documentation for full setup for IOS:",
              Object(l.jsxs)("strong", {
                className: "strong",
                children: [
                  " ",
                  "https://firebase.flutter.dev/docs/messaging/apple-integration",
                  " ",
                ],
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Paste firebase server key into admin panel Notification Settings section. You can receive server key from",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [
                  "Firebase project settings",
                  "->",
                  "Cloud Messaging",
                  "->",
                  " Server Key",
                  " ",
                ],
              }),
              Object(l.jsx)("br", {}),
              "After setup, please restart your IDE and uninstall your previously installed app, and then run it. Also do NOT try to test it on emulator or simulator. Emulator and simulators are unable to get push. Use real device for this purpose.",
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Add Google Map API Key",
              }),
              "\u2022 Please generate the google API key. You can visit this link - https://developers.google.com/maps/documentation/embed/get-api-key ",
              Object(l.jsx)("br", {}),
              "\u2022 You need to enable mentioned APIs: Direction API, Distance Matrix API, Geocoding API, Maps SDK for Android, Maps SDK for iOS, Place API. ",
              Object(l.jsx)("br", {}),
              "\u2022 Then you have to enable billing account. Visit this URL for activation: https://support.google.com/googleapi/answer/6158867?hl=en ",
              Object(l.jsx)("br", {}),
              "\u2022 After generating API key, you have to paste it on 3 different places: Android, iOS and web. ",
              Object(l.jsx)("br", {}),
              "For android, open",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/android/app/src/main/AndroidManifest.xml",
              }),
              " ",
              "and place the value of",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "com.google.android.geo.API_KEY ",
              }),
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsx)("p", {
                    children: " /android/app/src/main/AndroidManifest.xml",
                  }),
                  Object(l.jsx)("hr", {}),
                  Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsx)("span", {
                        className: "ps-0",
                        children:
                          '<meta-data android:name="com.google.android.geo.API_KEY" android:value=\u201cYOUR_MAP_API_KEY_HERE\u201d/>',
                      }),
                      Object(l.jsx)("span", {
                        className: 5 === s ? "bg-success copy" : "copy",
                        onClick: function () {
                          return c(
                            '<meta-data android:name="com.google.android.geo.API_KEY" android:value=\u201cYOUR_MAP_API_KEY_HERE\u201d/>',
                            5
                          );
                        },
                        children: 5 === s ? "copied!" : "copy",
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "mt-4",
                children: [
                  "For iOS: open",
                  " ",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "/iOS/Runner/AppDelegate.swift",
                  }),
                  "and place the value of",
                  " ",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "GMSServices.provideAPIKey",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/iOS/Runner/AppDelegate.swift",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsx)("span", {
                            className: "ps-0",
                            children:
                              'GMSServices.provideAPIKey(\u201cYOUR_MAP_API_KEY_HERE")',
                          }),
                          Object(l.jsx)("span", {
                            className: 6 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c(
                                'GMSServices.provideAPIKey(\u201cYOUR_MAP_API_KEY_HERE")',
                                6
                              );
                            },
                            children: 6 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/vendor-app-build-release",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " App build release ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customization-deliveryboy",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Customization Mobile App ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        K = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: " Mandatory setup",
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "INFO" }),
                    ],
                  }),
                  "The same documentation for Delivery app",
                ],
              }),
              Object(l.jsxs)("h4", {
                className: "introduction-contentTitle",
                children: [" ", "Run an existing flutter project on IDE", " "],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change App Logo ",
              }),
              "You can generate app icon using this website https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html ",
              Object(l.jsx)("br", {}),
              "\u2022 Then go to",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /android/app/src/main/res",
              }),
              "and replace all mipmap folder with your /android folder ",
              Object(l.jsx)("br", {}),
              "\u2022 Again go to ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/ios/Runner",
              }),
              " and replace Assets.xcassets with your generated Assets.xcassets folder ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change App Name ",
              }),
              Object(l.jsxs)("div", {
                className: "mt-4 mb-3",
                children: [
                  "1.Change the value of label from",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "/android/app/src/main/AndroidManifest.xml",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/android/app/src/main/AndroidManifest.xml",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsx)("span", {
                            children: 'android:label="My App"',
                          }),
                          Object(l.jsx)("span", {
                            className: 2 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c('android:label="My App"\u2019', 2);
                            },
                            children: 2 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "mt-4 mb-3",
                children: [
                  "2.Change the value of CFBundleName from",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: " /iOS/Runner/info.plist",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/iOS/Runner/info.plist",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsxs)("span", {
                            children: [
                              "<key>CFBundleName</key>",
                              " ",
                              Object(l.jsx)("br", {}),
                              "<string>My App</string>",
                            ],
                          }),
                          Object(l.jsx)("span", {
                            className: 3 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c(
                                "<key>CFBundleName</key><string>My App</string>",
                                3
                              );
                            },
                            children: 3 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change Base URL",
              }),
              "Please do NOT put slash ( / ) at the end of your base url. Use your admin url as base url. First you have to install your admin panel. For example: If your admin url is",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " https://your_domain.com/admin",
              }),
              "then base url will be https://your_domain.com. Open",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [
                  " ",
                  "/lib/infrastructure/services/app_constants.dart",
                ],
              }),
              "and replace baseUrl variable value with your own URL.",
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsx)("p", {
                    children: "/lib/infrastructure/services/app_constants.dart",
                  }),
                  Object(l.jsx)("hr", {}),
                  Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsxs)("span", {
                        className: "ps-0",
                        children: [
                          "static const String baseUrl=",
                          Object(l.jsx)("span", {
                            className: "text-black",
                            children: "'https://your_domain.com'",
                          }),
                        ],
                      }),
                      Object(l.jsx)("span", {
                        className: 4 === s ? "bg-success copy" : "copy",
                        onClick: function () {
                          return c("baseUrl=https://your_domain.com", 4);
                        },
                        children: 4 === s ? "copied!" : "copy",
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/doc/vendor1.jpg",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/doc/vendor1.jpg",
                        alt: "image",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Package",
              }),
              "Firstly, find out the existing package name. You can find it out from top of",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/app/src/main/AndroidManifest.xml",
              }),
              "file. Then right click on project folder from android studio and click on",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "replace in path",
              }),
              "You will see a popup window with two input boxes. In first box you have to put existing package name that you saw in",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "AndroidManifest.xml",
              }),
              "file previously and then write down your preferred package name in second box and then click on",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "Replace All",
              }),
              " button.",
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Setup Firebase for Push Notification",
              }),
              "\u2022 Firstly, change your package name. If you didn\u2019t then go to this link",
              " ",
              Object(l.jsx)("br", {}),
              "\u2022 Create your own firebase project from",
              " ",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://console.firebase.google.com ",
              }),
              "and also add there an android app with your own package name and app name",
              " ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-4",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(T.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "WARNING" }),
                    ],
                  }),
                  "Please do NOT create multiple projects if you have multiple app like User App, Delivery App. Create only one project and add multiple apps under one project.",
                ],
              }),
              "\u2022 Click register app and download google-services.json file from there.",
              " ",
              Object(l.jsx)("br", {}),
              "\u2022 Copy that file and paste it under",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /android/app/ folder",
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Create a totally white png logo for notification icon. Paste it on",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [" ", "/android/app/src/main/res/drawable/"],
              }),
              "and replace notification_icon.png with your whiter version logo. ",
              Object(l.jsx)("br", {}),
              "\u2022 For IOS again create an app under the same project and download",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "GoogleService-Info.plist",
              }),
              "and paste it under",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/iOS/ folder",
              }),
              " ",
              Object(l.jsx)("br", {}),
              "Also you are advised to follow this documentation for full setup for IOS:",
              Object(l.jsxs)("strong", {
                className: "strong",
                children: [
                  " ",
                  "https://firebase.flutter.dev/docs/messaging/apple-integration",
                  " ",
                ],
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Paste firebase server key into admin panel Notification Settings section. You can receive server key from",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [
                  "Firebase project settings",
                  "->",
                  "Cloud Messaging",
                  "->",
                  " Server Key",
                  " ",
                ],
              }),
              Object(l.jsx)("br", {}),
              "After setup, please restart your IDE and uninstall your previously installed app, and then run it. Also do NOT try to test it on emulator or simulator. Emulator and simulators are unable to get push. Use real device for this purpose.",
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Add Google Map API Key",
              }),
              "\u2022 Please generate the google API key. You can visit this link - https://developers.google.com/maps/documentation/embed/get-api-key ",
              Object(l.jsx)("br", {}),
              "\u2022 You need to enable mentioned APIs: Direction API, Distance Matrix API, Geocoding API, Maps SDK for Android, Maps SDK for iOS, Place API. ",
              Object(l.jsx)("br", {}),
              "\u2022 Then you have to enable billing account. Visit this URL for activation: https://support.google.com/googleapi/answer/6158867?hl=en ",
              Object(l.jsx)("br", {}),
              "\u2022 After generating API key, you have to paste it on 3 different places: Android, iOS and web. ",
              Object(l.jsx)("br", {}),
              "For android, open",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/android/app/src/main/AndroidManifest.xml",
              }),
              " ",
              "and place the value of",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "com.google.android.geo.API_KEY ",
              }),
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsx)("p", {
                    children: " /android/app/src/main/AndroidManifest.xml",
                  }),
                  Object(l.jsx)("hr", {}),
                  Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsx)("span", {
                        className: "ps-0",
                        children:
                          '<meta-data android:name="com.google.android.geo.API_KEY" android:value=\u201cYOUR_MAP_API_KEY_HERE\u201d/>',
                      }),
                      Object(l.jsx)("span", {
                        className: 5 === s ? "bg-success copy" : "copy",
                        onClick: function () {
                          return c(
                            '<meta-data android:name="com.google.android.geo.API_KEY" android:value=\u201cYOUR_MAP_API_KEY_HERE\u201d/>',
                            5
                          );
                        },
                        children: 5 === s ? "copied!" : "copy",
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "mt-4",
                children: [
                  "For iOS: open",
                  " ",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "/iOS/Runner/AppDelegate.swift",
                  }),
                  "and place the value of",
                  " ",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "GMSServices.provideAPIKey",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/iOS/Runner/AppDelegate.swift",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsx)("span", {
                            className: "ps-0",
                            children:
                              'GMSServices.provideAPIKey(\u201cYOUR_MAP_API_KEY_HERE")',
                          }),
                          Object(l.jsx)("span", {
                            className: 6 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c(
                                'GMSServices.provideAPIKey(\u201cYOUR_MAP_API_KEY_HERE")',
                                6
                              );
                            },
                            children: 6 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customer-app-build-release",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " App build release ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customization-vendor",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Customization ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        G = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: " Mandatory setup",
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "INFO" }),
                    ],
                  }),
                  "The same documentation for Delivery app",
                ],
              }),
              Object(l.jsxs)("h4", {
                className: "introduction-contentTitle",
                children: [" ", "Run an existing flutter project on IDE", " "],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change App Logo ",
              }),
              "You can generate app icon using this website https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html ",
              Object(l.jsx)("br", {}),
              "\u2022 Then go to",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /android/app/src/main/res",
              }),
              "and replace all mipmap folder with your /android folder ",
              Object(l.jsx)("br", {}),
              "\u2022 Again go to ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/ios/Runner",
              }),
              " and replace Assets.xcassets with your generated Assets.xcassets folder ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change App Name ",
              }),
              Object(l.jsxs)("div", {
                className: "mt-4 mb-3",
                children: [
                  "1.Change the value of label from",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "/android/app/src/main/AndroidManifest.xml",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/android/app/src/main/AndroidManifest.xml",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsx)("span", {
                            children: 'android:label="My App"',
                          }),
                          Object(l.jsx)("span", {
                            className: 2 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c('android:label="My App"\u2019', 2);
                            },
                            children: 2 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "mt-4 mb-3",
                children: [
                  "2.Change the value of CFBundleName from",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: " /iOS/Runner/info.plist",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/iOS/Runner/info.plist",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsxs)("span", {
                            children: [
                              "<key>CFBundleName</key>",
                              " ",
                              Object(l.jsx)("br", {}),
                              "<string>My App</string>",
                            ],
                          }),
                          Object(l.jsx)("span", {
                            className: 3 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c(
                                "<key>CFBundleName</key><string>My App</string>",
                                3
                              );
                            },
                            children: 3 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Change Base URL",
              }),
              "Please do NOT put slash ( / ) at the end of your base url. Use your admin url as base url. First you have to install your admin panel. For example: If your admin url is",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " https://your_domain.com/admin",
              }),
              "then base url will be https://your_domain.com. Open",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [
                  " ",
                  "/lib/infrastructure/services/app_constants.dart",
                ],
              }),
              "and replace baseUrl variable value with your own URL.",
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsx)("p", {
                    children: "/lib/infrastructure/services/app_constants.dart",
                  }),
                  Object(l.jsx)("hr", {}),
                  Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsxs)("span", {
                        className: "ps-0",
                        children: [
                          "static const String baseUrl=",
                          Object(l.jsx)("span", {
                            className: "text-black",
                            children: "'https://your_domain.com'",
                          }),
                        ],
                      }),
                      Object(l.jsx)("span", {
                        className: 4 === s ? "bg-success copy" : "copy",
                        onClick: function () {
                          return c("baseUrl=https://your_domain.com", 4);
                        },
                        children: 4 === s ? "copied!" : "copy",
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/doc/customer1.jpg",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/doc/customer1.jpg",
                        alt: "image",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Package",
              }),
              "Firstly, find out the existing package name. You can find it out from top of",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/app/src/main/AndroidManifest.xml",
              }),
              "file. Then right click on project folder from android studio and click on",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "replace in path",
              }),
              "You will see a popup window with two input boxes. In first box you have to put existing package name that you saw in",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "AndroidManifest.xml",
              }),
              "file previously and then write down your preferred package name in second box and then click on",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "Replace All",
              }),
              " button.",
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Setup Firebase for Push Notification",
              }),
              "\u2022 Firstly, change your package name. If you didn\u2019t then go to this link",
              " ",
              Object(l.jsx)("br", {}),
              "\u2022 Create your own firebase project from",
              " ",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://console.firebase.google.com ",
              }),
              "and also add there an android app with your own package name and app name",
              " ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-4",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(T.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "WARNING" }),
                    ],
                  }),
                  "Please do NOT create multiple projects if you have multiple app like User App, Delivery App. Create only one project and add multiple apps under one project.",
                ],
              }),
              "\u2022 Click register app and download google-services.json file from there.",
              " ",
              Object(l.jsx)("br", {}),
              "\u2022 Copy that file and paste it under",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /android/app/ folder",
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Create a totally white png logo for notification icon. Paste it on",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [" ", "/android/app/src/main/res/drawable/"],
              }),
              "and replace notification_icon.png with your whiter version logo. ",
              Object(l.jsx)("br", {}),
              "\u2022 For IOS again create an app under the same project and download",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "GoogleService-Info.plist",
              }),
              "and paste it under",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/iOS/ folder",
              }),
              " ",
              Object(l.jsx)("br", {}),
              "Also you are advised to follow this documentation for full setup for IOS:",
              Object(l.jsxs)("strong", {
                className: "strong",
                children: [
                  " ",
                  "https://firebase.flutter.dev/docs/messaging/apple-integration",
                  " ",
                ],
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Paste firebase server key into admin panel Notification Settings section. You can receive server key from",
              " ",
              Object(l.jsxs)("span", {
                className: "introduction-step",
                children: [
                  "Firebase project settings",
                  "->",
                  "Cloud Messaging",
                  "->",
                  " Server Key",
                  " ",
                ],
              }),
              Object(l.jsx)("br", {}),
              "After setup, please restart your IDE and uninstall your previously installed app, and then run it. Also do NOT try to test it on emulator or simulator. Emulator and simulators are unable to get push. Use real device for this purpose.",
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: " Add Google Map API Key",
              }),
              "\u2022 Please generate the google API key. You can visit this link - https://developers.google.com/maps/documentation/embed/get-api-key ",
              Object(l.jsx)("br", {}),
              "\u2022 You need to enable mentioned APIs: Direction API, Distance Matrix API, Geocoding API, Maps SDK for Android, Maps SDK for iOS, Place API. ",
              Object(l.jsx)("br", {}),
              "\u2022 Then you have to enable billing account. Visit this URL for activation: https://support.google.com/googleapi/answer/6158867?hl=en ",
              Object(l.jsx)("br", {}),
              "\u2022 After generating API key, you have to paste it on 3 different places: Android, iOS and web. ",
              Object(l.jsx)("br", {}),
              "For android, open",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/android/app/src/main/AndroidManifest.xml",
              }),
              " ",
              "and place the value of",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "com.google.android.geo.API_KEY ",
              }),
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsx)("p", {
                    children: " /android/app/src/main/AndroidManifest.xml",
                  }),
                  Object(l.jsx)("hr", {}),
                  Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsx)("span", {
                        className: "ps-0",
                        children:
                          '<meta-data android:name="com.google.android.geo.API_KEY" android:value=\u201cYOUR_MAP_API_KEY_HERE\u201d/>',
                      }),
                      Object(l.jsx)("span", {
                        className: 5 === s ? "bg-success copy" : "copy",
                        onClick: function () {
                          return c(
                            '<meta-data android:name="com.google.android.geo.API_KEY" android:value=\u201cYOUR_MAP_API_KEY_HERE\u201d/>',
                            5
                          );
                        },
                        children: 5 === s ? "copied!" : "copy",
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "mt-4",
                children: [
                  "For iOS: open",
                  " ",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "/iOS/Runner/AppDelegate.swift",
                  }),
                  "and place the value of",
                  " ",
                  Object(l.jsx)("span", {
                    className: "introduction-step",
                    children: "GMSServices.provideAPIKey",
                  }),
                  Object(l.jsxs)("div", {
                    className: "introduction-code",
                    children: [
                      Object(l.jsx)("p", {
                        children: "/iOS/Runner/AppDelegate.swift",
                      }),
                      Object(l.jsx)("hr", {}),
                      Object(l.jsxs)("div", {
                        children: [
                          Object(l.jsx)("span", {
                            className: "ps-0",
                            children:
                              'GMSServices.provideAPIKey(\u201cYOUR_MAP_API_KEY_HERE")',
                          }),
                          Object(l.jsx)("span", {
                            className: 6 === s ? "bg-success copy" : "copy",
                            onClick: function () {
                              return c(
                                'GMSServices.provideAPIKey(\u201cYOUR_MAP_API_KEY_HERE")',
                                6
                              );
                            },
                            children: 6 === s ? "copied!" : "copy",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/build-code-and-setup-on-server",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Build code and setup-on-server ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customization-customer",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Customization Mobile App ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        L = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: " Customization",
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Translate mobile app",
              }),
              "\u2022 Translation admin panel is very easy. To translate admin panel, go to admin panel and open ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("span", {
                className: "introduction-step-2",
                children: ["Settings ", ">", " Translations menu"],
              }),
              "and Translate all words into your language",
              Object(l.jsxs)("div", {
                className: "introduction-img-container",
                children: [
                  Object(l.jsx)("img", {
                    src: "./assets/img/doc/translation2.jpg",
                    alt: "img",
                    className: "img-responsive",
                  }),
                  Object(l.jsx)("img", {
                    src: "./assets/img/doc/translation1.jpg",
                    alt: "img",
                    className: "img-responsive",
                  }),
                ],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Color",
              }),
              "\u2022 Open",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/lib/presentation/styles/style.dart",
              }),
              "file and change colors as you want. ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)("img", {
                  src: "./assets/img/doc/color.jpg",
                  alt: "img",
                  className: "img-responsive-full",
                }),
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Font",
              }),
              "\u2022 in our apps, google font package is installed. You may change app fonts easily by selecting new fonts",
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-vendor",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup Mobile App",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/vendor-app-build-release",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " App build & release ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        W = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Mandatory Setup Web",
              }),
              "\u2022 Download the code from codecayon ",
              Object(l.jsx)("br", {}),
              "\u2022 Extract the zip files ",
              Object(l.jsx)("br", {}),
              "\u2022 Upload the front folder to your server ",
              Object(l.jsx)("br", {}),
              "\u2022 Install pm2 globally on your server ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "yarn add pm2 -g",
                    }),
                    Object(l.jsx)("span", {
                      className: 1 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn add pm2 -g", 1);
                      },
                      children: 1 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "npm install pm2 -g",
                    }),
                    Object(l.jsx)("span", {
                      className: 2 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm install pm2 -g", 2);
                      },
                      children: 2 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Install required package ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "yarn",
                    }),
                    Object(l.jsx)("span", {
                      className: 3 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn", 3);
                      },
                      children: 3 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "npm install",
                    }),
                    Object(l.jsx)("span", {
                      className: 4 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm install", 4);
                      },
                      children: 4 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Build frontend using following command ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "yarn next build",
                    }),
                    Object(l.jsx)("span", {
                      className: 5 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn run build", 5);
                      },
                      children: 5 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "npm next build",
                    }),
                    Object(l.jsx)("span", {
                      className: 6 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm run build", 6);
                      },
                      children: 6 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Run project with pm2 ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: 'pm2 start "yarn next start"',
                    }),
                    Object(l.jsx)("span", {
                      className: 5 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn run build", 5);
                      },
                      children: 5 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: 'pm2 start "npm next start"',
                    }),
                    Object(l.jsx)("span", {
                      className: 6 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm run build", 6);
                      },
                      children: 6 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("h5", {
                className: "introduction-contentTitle",
                children: " How to setup web",
              }),
              Object(l.jsxs)("strong", {
                className: "introduction-subTitle",
                children: [
                  "How to setup cpurchase project from cpanel -",
                  Object(l.jsx)("strong", {
                    className: "strong",
                    children: " Front",
                  }),
                ],
              }),
              Object(l.jsx)("div", {
                className: "iframe-wrapper mb-2",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/Fd1TXISmw-o",
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowfullscreen: !0,
                }),
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/troubleshooting-admin",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Troubleshooting admin ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/build-code-and-setup-on-server",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Build code and setup on server ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        H = function () {
          return Object(l.jsxs)("div", {
            className: "introduction",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Install on server backend",
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "INFO" }),
                    ],
                  }),
                  "Thus to install admin_backend, we need subdomains like admin.xyz.com and api.xyz.com.",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "Warning" }),
                    ],
                  }),
                  "Don\u2019t install the admin_backend in a sub directory (like: yourdomain.com/folder)",
                ],
              }),
              Object(l.jsx)("p", {
                children:
                  "\u2022 When you connect subdomain to backend code, set public folder as root folder for this subdomains.",
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/domain.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/domain.png",
                        alt: "admin",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", {
                children:
                  "\u2022 Compress your Laravel project files into a ZIP file. If git, node_modules folders exist in your Laravel project, be sure not to add them in the zip file.",
              }),
              Object(l.jsx)("p", { children: "\u2022 Login to your cPanel" }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/c-panel.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/c-panel.png",
                        alt: "admin",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", {
                children:
                  "\u2022 Create a database & user. (Make sure to save the database name, user, and password into a text file in a safe place.)",
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/create-db.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/create-db.png",
                        alt: "admin",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", { children: "\u2022 Add new user" }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/create-user.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/create-user.png",
                        alt: "admin",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", { children: "\u2022Add User to Database" }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/add-user.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/add-user.png",
                        alt: "admin",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", {
                children:
                  "\u2022 Open your File Manager in cPanel and upload the ZIP file of your Laravel project into the public_html directory and extract the ZIP file. The ZIP file should be uploaded and extracted directly in the public_html folder and not inside any subfolder.",
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/backend-file.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/backend-file.png",
                        alt: "admin",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", {
                children:
                  "\u2022 Now update your database details into the config file by opening the database.php file from the config folder and updating your database name, username and password into the database.php file. Now save the file. (Any sensitive credentials should not be uploaded in the env file in shared hosting.)",
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/config.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/config.png",
                        alt: "admin",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", {
                children:
                  "\u2022 To make your project secure and protect your .htaccess and .env files, open the .htaccess file from the public_html folder and write the following code to disable direct access and directory browsing:",
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/food-doc/config-2.png",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/config-2.png",
                        alt: "admin",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", {
                children: "\u2022 Open terminal. Go admin_backend folder.",
              }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsx)("p", { children: "composer install" }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "1.75rem" },
              }),
              Object(l.jsx)(A.b, {
                children: Object(l.jsx)(A.a, {
                  children: Object(l.jsx)("a", {
                    href: "./assets/img/food-doc/composer.jpg",
                    "data-fancybox": !0,
                    rel: "nofollow",
                    children: Object(l.jsx)("img", {
                      src: "./assets/img/food-doc/composer.jpg",
                      alt: "admin",
                      loading: "lazy",
                      className: "img-responsive-full",
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", {
                children:
                  "to install all php dependencies if you have not uploaded vendor folder. Then change your environmental variables in the .env file Generate a new application key",
              }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsx)("p", {
                  children: "php artisan key:generate",
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "1.75rem" },
              }),
              Object(l.jsx)(A.b, {
                children: Object(l.jsx)(A.a, {
                  children: Object(l.jsx)("a", {
                    href: "./assets/img/food-doc/generate.jpg",
                    "data-fancybox": !0,
                    rel: "nofollow",
                    children: Object(l.jsx)("img", {
                      src: "./assets/img/food-doc/generate.jpg",
                      alt: "admin",
                      loading: "lazy",
                      className: "img-responsive-full",
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("ul", {
                children: Object(l.jsx)("li", {
                  children: Object(l.jsx)("strong", {
                    children:
                      "Change lisence keys in /config/credential.php with your\u2019s",
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/doc/web-1.jpg",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/food-doc/php_backend_food.jpg",
                        alt: "image",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsxs)("p", {
                children: [
                  "Migrate and seed your database as per you need.",
                  Object(l.jsx)("br", {}),
                  " 1. Migrate Tables: `php artisan migrate`",
                  Object(l.jsx)("br", {}),
                  " 2. Seed Database: `php artisan db:seed`",
                  Object(l.jsx)("br", {}),
                  "Set the correct folder permissions",
                ],
              }),
              Object(l.jsx)(A.b, {
                children: Object(l.jsx)(A.a, {
                  children: Object(l.jsx)("a", {
                    href: "./assets/img/food-doc/migrate.jpg",
                    "data-fancybox": !0,
                    rel: "nofollow",
                    children: Object(l.jsx)("img", {
                      src: "./assets/img/food-doc/migrate.jpg",
                      alt: "admin",
                      loading: "lazy",
                      className: "img-responsive-full",
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "1.75rem" },
              }),
              Object(l.jsx)(A.b, {
                children: Object(l.jsx)(A.a, {
                  children: Object(l.jsx)("a", {
                    href: "./assets/img/food-doc/migrate-2.jpg",
                    "data-fancybox": !0,
                    rel: "nofollow",
                    children: Object(l.jsx)("img", {
                      src: "./assets/img/food-doc/migrate-2.jpg",
                      alt: "admin",
                      loading: "lazy",
                      className: "img-responsive-full",
                    }),
                  }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsx)("p", {
                  children: "chmod -R 775 storage",
                }),
              }),
              Object(l.jsx)("p", { children: "Run storage link" }),
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsx)("p", {
                    className: "mb-0",
                    children: "php artisan storage:link",
                  }),
                  Object(l.jsx)("p", {
                    children: "php artisan optimize:clear",
                  }),
                ],
              }),
              Object(l.jsx)("p", { children: "Your app should work now." }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "Usage Commands" }),
                    ],
                  }),
                  "1. Migrate Tables: `php artisan migrate` ",
                  Object(l.jsx)("br", {}),
                  " 2. Seed Database: `php artisan db:seed` ",
                  Object(l.jsx)("br", {}),
                  " 3. Start Server: `php artisan serve` ",
                  Object(l.jsx)("br", {}),
                  "4. Watch Server: `yarn watch` or `npm run watch`",
                ],
              }),
              Object(l.jsx)("h5", { children: "Other Commands:" }),
              Object(l.jsxs)("div", {
                className: "introduction-code",
                children: [
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Turn on maintenance mode ",
                      Object(l.jsx)("br", {}),
                      " php artisan down",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Turn off maintenance mode ",
                      Object(l.jsx)("br", {}),
                      " php artisan up",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Sync composer.local with composer.json ",
                      Object(l.jsx)("br", {}),
                      " composer update --lock",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Create Model ",
                      Object(l.jsx)("br", {}),
                      " php artisan make:model Flight",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Create Model & Migration ",
                      Object(l.jsx)("br", {}),
                      "php artisan make:model Flight -m",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Create Migration ",
                      Object(l.jsx)("br", {}),
                      " php artisan make:migration create_users_table --create=users",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Update Existing Migration ",
                      Object(l.jsx)("br", {}),
                      " php artisan make:migration add_votes_to_users_table --table=users",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Create Controller ",
                      Object(l.jsx)("br", {}),
                      " php artisan make:controller PhotoController",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Composer dump ",
                      Object(l.jsx)("br", {}),
                      " composer dump-autoload",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Clear caches ",
                      Object(l.jsx)("br", {}),
                      " php artisan cache:clear",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Clear and cache routes ",
                      Object(l.jsx)("br", {}),
                      " php artisan route:clear ",
                      Object(l.jsx)("br", {}),
                      " php artisan route:cache",
                    ],
                  }),
                  Object(l.jsxs)("p", {
                    className: "mb-0",
                    children: [
                      "# Clear and cache config ",
                      Object(l.jsx)("br", {}),
                      " php artisan config:clear ",
                      Object(l.jsx)("br", {}),
                      " php artisan config:cache",
                    ],
                  }),
                ],
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "3.75rem" },
              }),
              Object(l.jsx)("p", {
                children:
                  "\u2022 How to setup cpurchase project from cpanel - Backend",
              }),
              Object(l.jsx)("iframe", {
                width: "100%",
                height: "420",
                src: "https://www.youtube.com/embed/TKyjjO8yZY0",
                title: "YouTube video player",
                frameborder: "0",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowfullscreen: !0,
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/local-server",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: "Local server",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/troubleshooting-backend",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: "Troubleshooting backend",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        J = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Build code and setup on server",
              }),
              Object(l.jsx)("h3", {
                className: "introduction-contentTitle",
                children: " Admin Panel front ",
              }),
              "\u2022 Open /next.config.js and change BASE_URL with your server url",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/doc/web-1.jpg",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/doc/sundaymartWebSettings.png",
                        alt: "image",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              "For building web data for deployment, you have to run commands:",
              Object(l.jsx)("br", {}),
              "\u2022 Install required package ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "yarn",
                    }),
                    Object(l.jsx)("span", {
                      className: 3 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn", 3);
                      },
                      children: 3 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "npm install",
                    }),
                    Object(l.jsx)("span", {
                      className: 4 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm install", 4);
                      },
                      children: 4 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Build frontend using following command ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "yarn next build",
                    }),
                    Object(l.jsx)("span", {
                      className: 5 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn run build", 5);
                      },
                      children: 5 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "npm next build",
                    }),
                    Object(l.jsx)("span", {
                      className: 6 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm run build", 6);
                      },
                      children: 6 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Run project with pm2 ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: 'pm2 start "yarn next start"',
                    }),
                    Object(l.jsx)("span", {
                      className: 5 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn run build", 5);
                      },
                      children: 5 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: 'pm2 start "npm next start"',
                    }),
                    Object(l.jsx)("span", {
                      className: 6 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm run build", 6);
                      },
                      children: 6 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "INFO" }),
                    ],
                  }),
                  "You have to configure your server for front website. Front website runs in port 3000. open server configuration file and add",
                  " ",
                  Object(l.jsx)("div", {
                    className: "introduction-code",
                    children: Object(l.jsxs)("div", {
                      children: [
                        Object(l.jsxs)("span", {
                          className: "ps-0",
                          children: [
                            "ProxyPass / http://localhost:3000 ",
                            Object(l.jsx)("br", {}),
                            " ProxyPassReverse / http://localhost:3000",
                          ],
                        }),
                        Object(l.jsx)("span", {
                          className: 6 === s ? "bg-success copy" : "copy",
                          onClick: function () {
                            return c(
                              "ProxyPass / http://localhost:3000  ProxyPassReverse /http://localhost:3000",
                              7
                            );
                          },
                          children: 7 === s ? "copied!" : "copy",
                        }),
                      ],
                    }),
                  }),
                  " ",
                  "in your domain configuration section. Rewrite mode should be enabled in your server. After adding, restart your server",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-web",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup web ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-customer",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup customer ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Q = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Build code and setup on server",
              }),
              Object(l.jsx)("h3", {
                className: "introduction-contentTitle",
                children: " Admin Panel front ",
              }),
              "\u2022 Open /next.config.js and change BASE_URL with your server url",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)(A.b, {
                  children: Object(l.jsx)(A.a, {
                    children: Object(l.jsx)("a", {
                      href: "./assets/img/doc/web-1.jpg",
                      "data-fancybox": !0,
                      rel: "nofollow",
                      children: Object(l.jsx)("img", {
                        src: "./assets/img/doc/sundaymartWebSettings.png",
                        alt: "image",
                        loading: "lazy",
                        className: "img-responsive-full",
                      }),
                    }),
                  }),
                }),
              }),
              "For building web data for deployment, you have to run commands:",
              Object(l.jsx)("br", {}),
              "\u2022 Install required package ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "yarn",
                    }),
                    Object(l.jsx)("span", {
                      className: 3 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn", 3);
                      },
                      children: 3 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "npm install",
                    }),
                    Object(l.jsx)("span", {
                      className: 4 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm install", 4);
                      },
                      children: 4 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Build frontend using following command ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "yarn next build",
                    }),
                    Object(l.jsx)("span", {
                      className: 5 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn run build", 5);
                      },
                      children: 5 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "npm next build",
                    }),
                    Object(l.jsx)("span", {
                      className: 6 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm run build", 6);
                      },
                      children: 6 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Run project with pm2 ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: 'pm2 start "yarn next start"',
                    }),
                    Object(l.jsx)("span", {
                      className: 5 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn run build", 5);
                      },
                      children: 5 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: 'pm2 start "npm next start"',
                    }),
                    Object(l.jsx)("span", {
                      className: 6 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm run build", 6);
                      },
                      children: 6 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-primary mt-3",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(k.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "INFO" }),
                    ],
                  }),
                  "You have to configure your server for front website. Front website runs in port 3000. open server configuration file and add",
                  " ",
                  Object(l.jsx)("div", {
                    className: "introduction-code",
                    children: Object(l.jsxs)("div", {
                      children: [
                        Object(l.jsxs)("span", {
                          className: "ps-0",
                          children: [
                            "ProxyPass / http://localhost:3000 ",
                            Object(l.jsx)("br", {}),
                            " ProxyPassReverse / http://localhost:3000",
                          ],
                        }),
                        Object(l.jsx)("span", {
                          className: 6 === s ? "bg-success copy" : "copy",
                          onClick: function () {
                            return c(
                              "ProxyPass / http://localhost:3000  ProxyPassReverse /http://localhost:3000",
                              7
                            );
                          },
                          children: 7 === s ? "copied!" : "copy",
                        }),
                      ],
                    }),
                  }),
                  " ",
                  "in your domain configuration section. Rewrite mode should be enabled in your server. After adding, restart your server",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/build-code-and-setup-on-server",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Build code and setup on server ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-customer",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup customer ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        q = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Admin Panel",
              }),
              Object(l.jsx)("h3", {
                className: "introduction-title",
                children: "Update",
              }),
              "For update the admin panel just upload admin_front and admin_backend folders in your project root folder and extract it. Build project.",
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("div", {
                className: "iframe-wrapper",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/I6bhGMcVR5E",
                  title: "How to update project",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-4",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(T.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "WARNING" }),
                    ],
                  }),
                  "You have to be a developer in this case. If something goes wrong, we won't be responsible for that.",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/firebase",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Firebase ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/update-app-web",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " App & Web ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        V = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "App & Web",
              }),
              Object(l.jsx)("h3", {
                className: "introduction-title",
                children: "Update mobile App",
              }),
              "Download source code and replace it with old one and build.",
              Object(l.jsx)("h3", {
                className: "introduction-title",
                children: "Update mobile Web",
              }),
              "Upload front files to server and do following steps:",
              Object(l.jsx)("br", {}),
              "\u2022 Install required package ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "yarn",
                    }),
                    Object(l.jsx)("span", {
                      className: 3 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn", 3);
                      },
                      children: 3 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "npm install",
                    }),
                    Object(l.jsx)("span", {
                      className: 4 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm install", 4);
                      },
                      children: 4 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Build frontend using following command ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "yarn next build",
                    }),
                    Object(l.jsx)("span", {
                      className: 5 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn run build", 5);
                      },
                      children: 5 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("p", { className: "mt-2", children: "or" }),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "npm next build",
                    }),
                    Object(l.jsx)("span", {
                      className: 6 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("npm run build", 6);
                      },
                      children: 6 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("br", {}),
              "\u2022 Restart project with pm2 ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-code",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "pm2 stop 0 & pm2 start 0",
                    }),
                    Object(l.jsx)("span", {
                      className: 7 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("yarn run build", 7);
                      },
                      children: 7 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("div", {
                className: "iframe-wrapper",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/I6bhGMcVR5E",
                  title: "How to update project",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
              }),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-4",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(T.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "WARNING" }),
                    ],
                  }),
                  "You have to be a developer in this case. If something goes wrong, we won't be responsible for that.",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/update-admin-panel",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Admin Panel ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/support-plan",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Support plan ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        X = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Frontend requirements",
              }),
              "\u2022 NodeJS v14+ MySQL 5.7+ ",
              Object(l.jsx)("br", {}),
              "\u2022 NextJS v12+ ",
              Object(l.jsx)("br", {}),
              "\u2022 ReactJS v17- ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsxs)("div", {
                className: "alert alert-danger mt-4",
                role: "alert",
                children: [
                  Object(l.jsxs)("div", {
                    className: "mb-2",
                    children: [
                      Object(l.jsx)(T.a, { size: 22 }),
                      " ",
                      Object(l.jsx)("strong", { children: "WARNING" }),
                    ],
                  }),
                  "Please do this very carefully. We bear no responsibility for your mistake.",
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/server",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Backed ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mobile-app",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mobile App ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Z = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", { className: "title", children: "Frontend" }),
              Object(l.jsx)("p", {
                className: "inner-text",
                children:
                  "Please, to setup frontend, download nodeJs and install it in your computer.",
              }),
              "Windows:",
              " ",
              Object(l.jsx)("a", {
                href: "https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi",
                className: "introduction-link",
                children:
                  "https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi",
              }),
              Object(l.jsx)("br", {}),
              "Mac:",
              " ",
              Object(l.jsx)("a", {
                href: "https://nodejs.org/dist/v16.17.0/node-v16.17.0.pkg",
                className: "introduction-link",
                children: "https://nodejs.org/dist/v16.17.0/node-v16.17.0.pkg",
              }),
              Object(l.jsx)("br", {}),
              "Linux:",
              " ",
              Object(l.jsx)("a", {
                href: "https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-x64.tar.xz",
                className: "introduction-link",
                children:
                  "https://nodejs.org/dist/v16.17.0/node-v16.17.0-linux-x64.tar.xz",
              }),
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/flutter-sdk",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mobile App ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/local-server",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Backend ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        $ = function (e) {
          var t = e.data,
            s = void 0 === t ? [] : t;
          return Object(l.jsx)(l.Fragment, {
            children: s.map(function (e, t) {
              return Object(l.jsx)(
                "div",
                {
                  className: "col-xl-4 col-lg-6 mb-5",
                  children: Object(l.jsx)("div", {
                    className: "ptf-animated-block h-100",
                    "data-aos": "fade",
                    "data-aos-delay": 100 * t,
                    children: Object(l.jsxs)("div", {
                      className: "ptf-pricing-table h-100",
                      children: [
                        2 === t
                          ? Object(l.jsx)("div", {
                            className: "badge",
                            children: "Popular",
                          })
                          : "",
                        Object(l.jsx)("div", {
                          className: "ptf-pricing-table__header",
                          children: Object(l.jsx)("h4", {
                            className: "ptf-pricing-table__title",
                            children: e.title,
                          }),
                        }),
                        Object(l.jsxs)("div", {
                          className: "ptf-pricing-table__price",
                          children: [
                            Object(l.jsx)("span", {
                              className: "currency",
                              children: "$",
                            }),
                            Object(l.jsx)("span", {
                              className: "price",
                              children: e.price,
                            }),
                            Object(l.jsx)("span", {
                              className: "period",
                              children: "/ Month",
                            }),
                          ],
                        }),
                        Object(l.jsx)("div", {
                          className: "ptf-pricing-table__description",
                          children: "Month",
                        }),
                        Object(l.jsx)("div", {
                          className: "ptf-pricing-table__content",
                          dangerouslySetInnerHTML: { __html: e.description },
                        }),
                        Object(l.jsx)("div", {
                          className: "ptf-pricing-table__action",
                          children: Object(l.jsx)(p.b, {
                            className:
                              "ptf-btn ptf-btn--primary ptf-btn--block",
                            to: "/login",
                            onClick: function (e) {
                              return e.preventDefault();
                            },
                            children: "Purchase",
                          }),
                        }),
                      ],
                    }),
                  }),
                },
                t
              );
            }),
          });
        },
        ee = function (e) {
          var t = e.data;
          return Object(l.jsxs)("section", {
            children: [
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" },
              }),
              Object(l.jsxs)("div", {
                className: "container",
                children: [
                  Object(l.jsx)("div", {
                    className: "ptf-animated-block",
                    "data-aos": "fade",
                    "data-aos-delay": "0",
                    children: Object(l.jsx)("h2", {
                      className: "h2 large-heading text-white",
                      children: "Pricing & Plan",
                    }),
                  }),
                  Object(l.jsx)("div", {
                    className: "ptf-spacer",
                    style: { "--ptf-xxl": "3.75rem", "--ptf-md": "1.875rem" },
                  }),
                ],
              }),
              Object(l.jsx)("div", {
                className: "container",
                children: Object(l.jsx)("div", {
                  className: "row",
                  style: { "--bs-gutter-x": "2rem" },
                  children: Object(l.jsx)($, { data: t }),
                }),
              }),
              Object(l.jsx)("div", {
                className: "ptf-spacer",
                style: { "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" },
              }),
            ],
          });
        },
        te = [
          {
            title: "Plan 0",
            price: "150",
            description: "Setup Admin and Store panel on your hosting.",
          },
          {
            title: "Plan 1",
            price: "400",
            description:
              "Setup Admin and Store panel on your hosting. Link user, POS system and deliveryman apps with your admin panel. Customize app name, logo, a color, package name, splash screen, etc. Setup OTP configuration.",
          },
          {
            title: "Plan 2",
            price: "600",
            description:
              "Plan 1 + Configure push notification. Setup payment gateways. Third party API setup (google map API setup included).",
          },
          {
            title: "Plan 3",
            price: "800",
            description:
              "Plan 2 + Translate all applications to your local language. Upload user, store and delivery man apps to Google Play Store. [Optional] Upload apps to Apple Store (+$200 per app for Apple store release).",
          },
          {
            title: "Plan 4",
            price: "1100",
            description:
              "Plan 3 + Upload All apps to the Apple Store. One revision before project handover.",
          },
        ],
        se = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", { className: "title", children: "Support" }),
              Object(l.jsx)("h3", {
                className: "introduction-contentTitle",
                children: "Licenses, activation and customization",
              }),
              Object(l.jsx)("div", {
                children:
                  "After you purchased our product and installed it, please reach out to us via Telegram (1 202 340 1032) or WhatsApp (1 202 340 1032) to schedule activation. Please note that once you have downloaded the item, we will not issue a refund.",
              }),
              Object(l.jsx)("h3", {
                className: "introduction-contentTitle",
                children: "Holders of a regular license:",
              }),
              Object(l.jsxs)("div", {
                children: [
                  "We are happy to respond if you have one or two specific questions but can\u2019t provide extensive support and guidance for free. No support is provided to set up your server or flutter environment in your local device (iOS or Android) installation. To receive installation support, you need to purchase one of our support plans.",
                  Object(l.jsx)("br", {}),
                  "Please check our documentation before you purchase the item if you want to install it on your own. We are continually striving to improve documentation, so if you are unhappy with the current state of documentation, please check in later, as an updated version might suit your installation needs better. Please note that once you have downloaded the item, we will not issue a refund. Please also note that some of the features such as subscription are only available under the extended license.",
                  Object(l.jsx)("br", {}),
                  "Holders of an extended license",
                  Object(l.jsx)("br", {}),
                  "Please reach out to us if you have questions.",
                ],
              }),
              Object(l.jsx)("h3", {
                className: "introduction-contentTitle",
                children: "Customization",
              }),
              Object(l.jsxs)("div", {
                children: [
                  "Our team is available to help with customization. Please reach out to us with detailed information so that our team can give you a quote.",
                  Object(l.jsx)("br", {}),
                  "If our team has not done the customization, we cannot help you with any potential issues that may arise from your customization.",
                ],
              }),
              Object(l.jsx)(ee, { data: te }),
            ],
          });
        },
        ae = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", { className: "title", children: "Firebase" }),
              Object(l.jsx)("p", {
                className: "inner-text",
                children:
                  "We use Firebase Authentication, Cloud Messaging and Firestore in cpurchase. So, you have to setup Firebase in order to use cpurchase properly.",
              }),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("div", {
                className: "iframe-wrapper",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/OLwNp_e5bxM",
                  title: "Firebase configuration",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
              }),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("div", {
                className: "iframe-wrapper",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/jCgZZiz1480",
                  title: "How to run connect firebase to project",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
              }),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("div", {
                className: "iframe-wrapper",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/5HzrGiY9cFo",
                  title: "Firebase auth configuration",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
              }),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("div", {
                className: "iframe-wrapper",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/3E-kEe5X2bg",
                  title: "Cloud messaging",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
              }),
              Object(l.jsx)("div", { className: "mt-4" }),
              Object(l.jsx)("div", {
                className: "iframe-wrapper",
                children: Object(l.jsx)("iframe", {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/29ARDVIXvXk",
                  title: "Firestore",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                  allowFullScreen: !0,
                }),
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/deliveryboy-app-build-release",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Build code and setup on server ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/update-admin-panel",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Admin Panel ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ne = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Troubleshooting backend",
              }),
              Object(l.jsxs)("div", {
                class: "accordion",
                id: "accordionExample",
                children: [
                  Object(l.jsxs)("div", {
                    class: "accordion-item",
                    children: [
                      Object(l.jsx)("h2", {
                        class: "accordion-header",
                        id: "headingOne",
                        children: Object(l.jsx)("button", {
                          class: "accordion-button",
                          type: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseOne",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne",
                          children: "Troubleshooting 1",
                        }),
                      }),
                      Object(l.jsx)("div", {
                        id: "collapseOne",
                        class: "accordion-collapse collapse show",
                        "aria-labelledby": "headingOne",
                        "data-bs-parent": "#accordionExample",
                        children: Object(l.jsxs)("div", {
                          class: "accordion-body",
                          children: [
                            Object(l.jsx)("p", {
                              children:
                                "if you meet your serialized closure might have been modified or it's unsafe to be unserialized error you should use this code",
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-img-container mb-5",
                              children: Object(l.jsx)(A.b, {
                                children: Object(l.jsx)(A.a, {
                                  children: Object(l.jsx)("a", {
                                    href: "./assets/img/food-doc/trouble.jpg",
                                    "data-fancybox": !0,
                                    rel: "nofollow",
                                    children: Object(l.jsx)("img", {
                                      src: "./assets/img/food-doc/trouble.jpg",
                                      alt: "admin install",
                                      loading: "lazy",
                                      className: "img-responsive-full",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-code",
                              children: Object(l.jsx)("p", {
                                className: "mb-0",
                                children: "php artisan storage:link",
                              }),
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-code",
                              children: Object(l.jsx)("p", {
                                children: "php artisan optimize:clear",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    class: "accordion-item",
                    children: [
                      Object(l.jsx)("h2", {
                        class: "accordion-header",
                        id: "headingTwo",
                        children: Object(l.jsx)("button", {
                          class: "accordion-button",
                          type: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseTwo",
                          "aria-expanded": "true",
                          "aria-controls": "collapseTwo",
                          children: "Troubleshooting 2",
                        }),
                      }),
                      Object(l.jsx)("div", {
                        id: "collapseTwo",
                        class: "accordion-collapse collapse show",
                        "aria-labelledby": "headingTwo",
                        "data-bs-parent": "#accordionExample1",
                        children: Object(l.jsxs)("div", {
                          class: "accordion-body",
                          children: [
                            Object(l.jsx)("p", {
                              children:
                                "If you meet this error, check db credentials entered correctly in .env file. If everything is correct, run",
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-img-container mb-5",
                              children: Object(l.jsx)(A.b, {
                                children: Object(l.jsx)(A.a, {
                                  children: Object(l.jsx)("a", {
                                    href: "./assets/img/food-doc/laravel-migrate.png",
                                    "data-fancybox": !0,
                                    rel: "nofollow",
                                    children: Object(l.jsx)("img", {
                                      src: "./assets/img/food-doc/laravel-migrate.png",
                                      alt: "admin install",
                                      loading: "lazy",
                                      className: "img-responsive-full",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-code",
                              children: Object(l.jsx)("p", {
                                className: "mb-0",
                                children: "php artisan optimize:clear",
                              }),
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-code",
                              children: Object(l.jsx)("p", {
                                className: "mb-0",
                                children: "php artisan migrate",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    class: "accordion-item",
                    children: [
                      Object(l.jsx)("h2", {
                        class: "accordion-header",
                        id: "headingThree",
                        children: Object(l.jsx)("button", {
                          class: "accordion-button",
                          type: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseThree",
                          "aria-expanded": "true",
                          "aria-controls": "collapseThree",
                          children: "Troubleshooting 3",
                        }),
                      }),
                      Object(l.jsx)("div", {
                        id: "collapseThree",
                        class: "accordion-collapse collapse show",
                        "aria-labelledby": "headingThree",
                        "data-bs-parent": "#accordionExample3",
                        children: Object(l.jsxs)("div", {
                          class: "accordion-body",
                          children: [
                            Object(l.jsxs)("p", {
                              children: [
                                "If you meet this error while installing, check following extentions installed and enabled in your system:",
                                Object(l.jsxs)("ul", {
                                  children: [
                                    Object(l.jsx)("li", {
                                      children: "openssl",
                                    }),
                                    Object(l.jsx)("li", {
                                      children: "fileinfo",
                                    }),
                                    Object(l.jsx)("li", { children: "gd" }),
                                    Object(l.jsx)("li", { children: "curl" }),
                                    Object(l.jsx)("li", { children: "sodium" }),
                                    Object(l.jsx)("li", { children: "zip" }),
                                  ],
                                }),
                              ],
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-img-container mb-5",
                              children: Object(l.jsx)(A.b, {
                                children: Object(l.jsx)(A.a, {
                                  children: Object(l.jsx)("a", {
                                    href: "./assets/img/food-doc/trsh-3.png",
                                    "data-fancybox": !0,
                                    rel: "nofollow",
                                    children: Object(l.jsx)("img", {
                                      src: "./assets/img/food-doc/trsh-3.png",
                                      alt: "admin install",
                                      loading: "lazy",
                                      className: "img-responsive-full",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-backend",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup backend ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/install-on-server",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Install on server ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ce = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: " Customization",
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Translate mobile app",
              }),
              "\u2022 Translation admin panel is very easy. To translate admin panel, go to admin panel and open ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("span", {
                className: "introduction-step-2",
                children: ["Settings ", ">", " Translations menu"],
              }),
              "and Translate all words into your language",
              Object(l.jsxs)("div", {
                className: "introduction-img-container",
                children: [
                  Object(l.jsx)("img", {
                    src: "./assets/img/doc/translation2.jpg",
                    alt: "img",
                    className: "img-responsive",
                  }),
                  Object(l.jsx)("img", {
                    src: "./assets/img/doc/translation1.jpg",
                    alt: "img",
                    className: "img-responsive",
                  }),
                ],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Color",
              }),
              "\u2022 Open",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/lib/presentation/theme/app_style.dart",
              }),
              "file and change colors as you want. ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)("img", {
                  src: "./assets/img/doc/color3.jpg",
                  alt: "img",
                  className: "img-responsive-full",
                }),
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Font",
              }),
              "\u2022 in our apps, google font package is installed. You may change app fonts easily by selecting new fonts",
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-customer",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup Mobile App",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customer-app-build-release",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " App build & release ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ie = function () {
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: " Customization",
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Translate mobile app",
              }),
              "\u2022 Translation admin panel is very easy. To translate admin panel, go to admin panel and open ",
              Object(l.jsx)("br", {}),
              Object(l.jsxs)("span", {
                className: "introduction-step-2",
                children: ["Settings ", ">", " Translations menu"],
              }),
              "and Translate all words into your language",
              Object(l.jsxs)("div", {
                className: "introduction-img-container",
                children: [
                  Object(l.jsx)("img", {
                    src: "./assets/img/doc/translation2.jpg",
                    alt: "img",
                    className: "img-responsive",
                  }),
                  Object(l.jsx)("img", {
                    src: "./assets/img/doc/translation1.jpg",
                    alt: "img",
                    className: "img-responsive",
                  }),
                ],
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Color",
              }),
              "\u2022 Open",
              " ",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: "/lib/presentation/styles/style.dart",
              }),
              "file and change colors as you want. ",
              Object(l.jsx)("br", {}),
              Object(l.jsx)("div", {
                className: "introduction-img-container",
                children: Object(l.jsx)("img", {
                  src: "./assets/img/doc/color2.jpg",
                  alt: "img",
                  className: "img-responsive-full",
                }),
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Change App Font",
              }),
              "\u2022 in our apps, google font package is installed. You may change app fonts easily by selecting new fonts",
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-deliveryboy",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup Mobile App",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/deliveryboy-app-build-release",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " App build & release ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        oe = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "Troubleshooting admin",
              }),
              Object(l.jsxs)("div", {
                class: "accordion",
                id: "accordionExample",
                children: [
                  Object(l.jsxs)("div", {
                    class: "accordion-item",
                    children: [
                      Object(l.jsx)("h2", {
                        class: "accordion-header",
                        id: "headingOne",
                        children: Object(l.jsx)("button", {
                          class: "accordion-button",
                          type: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseOne",
                          "aria-expanded": "true",
                          "aria-controls": "collapseOne",
                          children: "Troubleshooting 1",
                        }),
                      }),
                      Object(l.jsx)("div", {
                        id: "collapseOne",
                        class: "accordion-collapse collapse show",
                        "aria-labelledby": "headingOne",
                        "data-bs-parent": "#accordionExample",
                        children: Object(l.jsxs)("div", {
                          class: "accordion-body has-white-color",
                          children: [
                            Object(l.jsx)("p", {
                              children:
                                "If you see above issue in your terminal, open package.json and remove GENERATE_SOURCEMAP=false. Then try to rebuild",
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-img-container mb-5",
                              children: Object(l.jsx)(A.b, {
                                children: Object(l.jsx)(A.a, {
                                  children: Object(l.jsx)("a", {
                                    href: "./assets/img/food-doc/troubleshooting-1.jpg",
                                    "data-fancybox": !0,
                                    rel: "nofollow",
                                    children: Object(l.jsx)("img", {
                                      src: "./assets/img/food-doc/troubleshooting-1.jpg",
                                      alt: "admin install",
                                      loading: "lazy",
                                      className: "img-responsive-full",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-code",
                              children: Object(l.jsxs)("div", {
                                children: [
                                  Object(l.jsx)("span", {
                                    children: "GENERATE_SOURCEMAP=false",
                                  }),
                                  Object(l.jsx)("span", {
                                    className:
                                      1 === s ? "bg-success copy" : "copy",
                                    onClick: function () {
                                      return c("GENERATE_SOURCEMAP=false", 1);
                                    },
                                    children: 1 === s ? "copied!" : "copy",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    class: "accordion-item",
                    children: [
                      Object(l.jsx)("h2", {
                        class: "accordion-header",
                        id: "headingTwo",
                        children: Object(l.jsx)("button", {
                          class: "accordion-button",
                          type: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseTwo",
                          "aria-expanded": "true",
                          "aria-controls": "collapseTwo",
                          children: "Troubleshooting 2",
                        }),
                      }),
                      Object(l.jsx)("div", {
                        id: "collapseTwo",
                        class: "accordion-collapse collapse show",
                        "aria-labelledby": "headingTwo",
                        "data-bs-parent": "#accordionExample1",
                        children: Object(l.jsxs)("div", {
                          class: "accordion-body",
                          children: [
                            Object(l.jsxs)("p", {
                              children: [
                                "\"message\": \"SQLSTATE[42000]: Syntax error or access violation: 1055 'elbarrio_foody_test_bd.u.firstname' isn't in GROUP BY (SQL: select u.id as id, u.firstname as firstname, u.img as img, u.lastname as lastname, u.phone as phone, sum(distinct orders.total_price) as total_price, count(distinct orders.id) as count from orders cross join users as u on orders.user_id = u.id where date(`orders`.`created_at`) ",
                                ">",
                                " 2023-02-24 and orders.status = delivered group by id having total_price ",
                                ">",
                                " 0 or count ",
                                ">",
                                ' 0 order by total_price desc limit 6 offset 0) in /home2/elbarrio/api.lavilla.pe/vendor/laravel/framework/src/Illuminate/Database/Connection.php:712"',
                                " ",
                                "}",
                              ],
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-img-container mb-5",
                              children: Object(l.jsx)(A.b, {
                                children: Object(l.jsx)(A.a, {
                                  children: Object(l.jsx)("a", {
                                    href: "./assets/img/food-doc/troubleshooting-2.jpg",
                                    "data-fancybox": !0,
                                    rel: "nofollow",
                                    children: Object(l.jsx)("img", {
                                      src: "./assets/img/food-doc/troubleshooting-2.jpg",
                                      alt: "admin install",
                                      loading: "lazy",
                                      className: "img-responsive-full",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-code",
                              children: Object(l.jsxs)("div", {
                                children: [
                                  Object(l.jsx)("span", {
                                    children:
                                      'Open configs/database.php and make "strict" false',
                                  }),
                                  Object(l.jsx)("span", {
                                    className:
                                      2 === s ? "bg-success copy" : "copy",
                                    onClick: function () {
                                      return c("strict=false", 2);
                                    },
                                    children: 2 === s ? "copied!" : "copy",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(l.jsxs)("div", {
                    class: "accordion-item",
                    children: [
                      Object(l.jsx)("h2", {
                        class: "accordion-header",
                        id: "headingThree",
                        children: Object(l.jsx)("button", {
                          class: "accordion-button",
                          type: "button",
                          "data-bs-toggle": "collapse",
                          "data-bs-target": "#collapseThree",
                          "aria-expanded": "true",
                          "aria-controls": "collapseThree",
                          children: "Troubleshooting 3",
                        }),
                      }),
                      Object(l.jsx)("div", {
                        id: "collapseThree",
                        class: "accordion-collapse collapse show",
                        "aria-labelledby": "headingThree",
                        "data-bs-parent": "#accordionExample3",
                        children: Object(l.jsxs)("div", {
                          class: "accordion-body",
                          children: [
                            "If your website's design has style issur, do following steps",
                            Object(l.jsxs)("p", {
                              children: [
                                "1. Before build, open package.json. ",
                                Object(l.jsx)("br", {}),
                                '2. Replace "antd": "^4.20.6", with "antd": "4.20.6". ',
                                Object(l.jsx)("br", {}),
                                "3. Then build and upload.",
                              ],
                            }),
                            Object(l.jsx)("div", {
                              className: "introduction-img-container mb-5",
                              children: Object(l.jsx)(A.b, {
                                children: Object(l.jsx)(A.a, {
                                  children: Object(l.jsx)("a", {
                                    href: "./assets/img/food-doc/antd.jpg",
                                    "data-fancybox": !0,
                                    rel: "nofollow",
                                    children: Object(l.jsx)("img", {
                                      src: "./assets/img/food-doc/antd.jpg",
                                      alt: "admin install",
                                      loading: "lazy",
                                      className: "img-responsive-full",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customization",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Customization ",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-web",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory setup web ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        re = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "App build & release",
              }),
              Object(l.jsx)("h3", {
                className: "introduction-title",
                children: "Build for Android",
              }),
              "For debug build you can run command:",
              Object(l.jsx)("div", {
                className: "introduction-code mb-4",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "flutter build apk",
                    }),
                    Object(l.jsx)("span", {
                      className: 1 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("flutter build apk", 1);
                      },
                      children: 1 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              "You will get a larger merged apk with this. But you can split them with this command:",
              Object(l.jsx)("div", {
                className: "introduction-code mb-4",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children:
                        "flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi",
                    }),
                    Object(l.jsx)("span", {
                      className: 2 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c(
                          "flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi",
                          2
                        );
                      },
                      children: 2 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              "Build file location:",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /build/app/outputs/apk/",
              }),
              "For deploying it please follow this documentation:",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://docs.flutter.dev/deployment/android",
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Build for iOS",
              }),
              "There are no general way to generate app for iOS. Apple doesn\u2019t allow to install app like this debug way. If you want to install it on your iOS device then you have to deploy it on TestFlight or AppStore. For deploying it please follow this documentation:",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://docs.flutter.dev/deployment/ios",
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customization-customer",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Customization customer",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-vendor",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory Setup Vendor ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        le = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "App build & release",
              }),
              Object(l.jsx)("h3", {
                className: "introduction-title",
                children: "Build for Android",
              }),
              "For debug build you can run command:",
              Object(l.jsx)("div", {
                className: "introduction-code mb-4",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "flutter build apk",
                    }),
                    Object(l.jsx)("span", {
                      className: 1 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("flutter build apk", 1);
                      },
                      children: 1 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              "You will get a larger merged apk with this. But you can split them with this command:",
              Object(l.jsx)("div", {
                className: "introduction-code mb-4",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children:
                        "flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi",
                    }),
                    Object(l.jsx)("span", {
                      className: 2 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c(
                          "flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi",
                          2
                        );
                      },
                      children: 2 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              "Build file location:",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /build/app/outputs/apk/",
              }),
              "For deploying it please follow this documentation:",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://docs.flutter.dev/deployment/android",
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Build for iOS",
              }),
              "There are no general way to generate app for iOS. Apple doesn\u2019t allow to install app like this debug way. If you want to install it on your iOS device then you have to deploy it on TestFlight or AppStore. For deploying it please follow this documentation:",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://docs.flutter.dev/deployment/ios",
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customization-deliveryboy",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Customization Mobile App",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/firebase",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Firebase ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        de = function () {
          var e = Object(a.useState)(null),
            t = Object(r.a)(e, 2),
            s = t[0],
            n = t[1],
            c = (function () {
              var e = Object(B.a)(
                Object(Y.a)().mark(function e(t, s) {
                  return Object(Y.a)().wrap(
                    function (e) {
                      for (; ;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              navigator.clipboard.writeText(t)
                            );
                          case 3:
                            n(s), (e.next = 9);
                            break;
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              n("Failed to copy!");
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function (t, s) {
                return e.apply(this, arguments);
              };
            })();
          return Object(l.jsxs)("div", {
            className: "introduction ",
            "data-aos": "fade-right",
            "data-aos-delay": "300",
            "data-aos-duration": "1000",
            children: [
              Object(l.jsx)("h1", {
                className: "title",
                children: "App build & release",
              }),
              Object(l.jsx)("h3", {
                className: "introduction-title",
                children: "Build for Android",
              }),
              "For debug build you can run command:",
              Object(l.jsx)("div", {
                className: "introduction-code mb-4",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children: "flutter build apk",
                    }),
                    Object(l.jsx)("span", {
                      className: 1 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c("flutter build apk", 1);
                      },
                      children: 1 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              "You will get a larger merged apk with this. But you can split them with this command:",
              Object(l.jsx)("div", {
                className: "introduction-code mb-4",
                children: Object(l.jsxs)("div", {
                  children: [
                    Object(l.jsx)("span", {
                      className: "ps-0",
                      children:
                        "flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi",
                    }),
                    Object(l.jsx)("span", {
                      className: 2 === s ? "bg-success copy" : "copy",
                      onClick: function () {
                        return c(
                          "flutter build apk --target-platform android-arm,android-arm64,android-x64 --split-per-abi",
                          2
                        );
                      },
                      children: 2 === s ? "copied!" : "copy",
                    }),
                  ],
                }),
              }),
              "Build file location:",
              Object(l.jsx)("span", {
                className: "introduction-step",
                children: " /build/app/outputs/apk/",
              }),
              "For deploying it please follow this documentation:",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://docs.flutter.dev/deployment/android",
              }),
              Object(l.jsx)("h4", {
                className: "introduction-contentTitle",
                children: "Build for iOS",
              }),
              "There are no general way to generate app for iOS. Apple doesn\u2019t allow to install app like this debug way. If you want to install it on your iOS device then you have to deploy it on TestFlight or AppStore. For deploying it please follow this documentation:",
              Object(l.jsx)("strong", {
                className: "strong",
                children: "https://docs.flutter.dev/deployment/ios",
              }),
              Object(l.jsxs)("div", {
                className: "center-page-container",
                children: [
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/customization-vendor",
                    className: "btn  previous",
                    children: [
                      Object(l.jsx)("p", { children: "Previous" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Customization Mobile App",
                      }),
                    ],
                  }),
                  Object(l.jsxs)(p.b, {
                    to: "/cpurchase-documentation/mandatory-setup-deliveryboy",
                    className: "btn  next",
                    children: [
                      Object(l.jsx)("p", { children: "Next" }),
                      Object(l.jsx)("p", {
                        className: "link",
                        children: " Mandatory Setup Web ",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        je = function () {
          return Object(l.jsx)(l.Fragment, {
            children: Object(l.jsx)(p.a, {
              children: Object(l.jsx)(m.d, {
                children: Object(l.jsxs)(m.b, {
                  path: "/",
                  element: Object(l.jsx)(w, {}),
                  children: [
                    Object(l.jsx)(m.b, {
                      path: "/",
                      element: Object(l.jsx)(P, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/user",
                      element: Object(l.jsx)(S, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/server",
                      element: Object(l.jsx)(C, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/front",
                      element: Object(l.jsx)(X, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/local-front",
                      element: Object(l.jsx)(Z, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/mobile-app",
                      element: Object(l.jsx)(M, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/flutter-sdk",
                      element: Object(l.jsx)(_, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/local-server",
                      element: Object(l.jsx)(F, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/install-on-server",
                      element: Object(l.jsx)(R, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/mandatory-setup",
                      element: Object(l.jsx)(E, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/customization",
                      element: Object(l.jsx)(z, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/mandatory-setup-mobile",
                      element: Object(l.jsx)(D, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/mandatory-setup-backend",
                      element: Object(l.jsx)(H, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/mandatory-setup-vendor",
                      element: Object(l.jsx)(K, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/mandatory-setup-customer",
                      element: Object(l.jsx)(G, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/mandatory-setup-deliveryboy",
                      element: Object(l.jsx)(U, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/customization-vendor",
                      element: Object(l.jsx)(L, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/customization-deliveryboy",
                      element: Object(l.jsx)(ie, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/customization-customer",
                      element: Object(l.jsx)(ce, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/customer-app-build-release",
                      element: Object(l.jsx)(re, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/vendor-app-build-release",
                      element: Object(l.jsx)(de, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/deliveryboy-app-build-release",
                      element: Object(l.jsx)(le, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/mandatory-setup-web",
                      element: Object(l.jsx)(W, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/build-code-and-setup-on-server",
                      element: Object(l.jsx)(J, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/build-code-and-setup-on-server-backend",
                      element: Object(l.jsx)(Q, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/update-admin-panel",
                      element: Object(l.jsx)(q, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/update-app-web",
                      element: Object(l.jsx)(V, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/support-plan",
                      element: Object(l.jsx)(se, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/firebase",
                      element: Object(l.jsx)(ae, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/troubleshooting-backend",
                      element: Object(l.jsx)(ne, {}),
                    }),
                    Object(l.jsx)(m.b, {
                      path: "/cpurchase-documentation/troubleshooting-admin",
                      element: Object(l.jsx)(oe, {}),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        be = function () {
          return (
            Object(a.useEffect)(function () {
              i.a.init({ duration: 1200 });
            }, []),
            Object(l.jsxs)(j, {
              children: [
                Object(l.jsx)(o.a, {
                  children: Object(l.jsx)("title", { children: "Cpurchase Store" }),
                }),
                Object(l.jsx)(b.a, {
                  position: "top-right",
                  autoClose: 3e3,
                  hideProgressBar: !0,
                  closeOnClick: !0,
                  pauseOnHover: !0,
                  draggable: !0,
                }),
                Object(l.jsx)(je, {}),
              ],
            })
          );
        },
        pe =
          (s(45),
            s(46),
            s(67),
            function () {
              return Object(l.jsx)(be, {});
            });
      Object(n.render)(Object(l.jsx)(pe, {}), document.getElementById("root"));
    },
  },
  [[69, 1, 2]],
]);
//# sourceMappingURL=main.5377a5d8.chunk.js.map