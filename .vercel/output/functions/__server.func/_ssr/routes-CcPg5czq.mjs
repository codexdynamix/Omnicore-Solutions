import { d as whatsappUrl, l as services, n as equipment, o as insights, u as site } from "./site-CUIpDz9m.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MessageCircle, f as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as Button } from "./router-kQu3XU0L.mjs";
import { t as MediaImage } from "./media-image-CBZ6vyt4.mjs";
import { t as EquipmentCard } from "./equipment-card-BVwdMZkw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CcPg5czq.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const featured = equipment.filter((item) => [
		"jaw-crusher",
		"concrete-pump",
		"feed-mixer-1t",
		"electric-fence",
		"excavator-hire",
		"generator"
	].includes(item.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: site.name,
				description: site.description,
				telephone: site.phoneTel,
				email: site.email,
				address: {
					"@type": "PostalAddress",
					streetAddress: site.address.line1,
					addressLocality: "Harare",
					addressCountry: "ZW"
				},
				url: "https://omnicoresolutions.co.zw"
			}) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 sm:pt-16 sm:pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase",
					children: "Harare · Nationwide"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mx-auto mt-5 max-w-4xl text-center text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl md:text-7xl",
					children: "Machinery for Zimbabwe’s farms, mines and sites."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: "Buy, hire and commission the plant that pays for itself — gold circuits, concrete pumps, feed mills and fence machines. Quoted on WhatsApp. Delivered from Cranborne."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quote",
							children: "Get a quote"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "whatsapp",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl("Hello Omnicore — I need machinery."),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), "Chat on WhatsApp"]
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
					src: "/images/hero.jpg",
					alt: "Excavator on Zimbabwe highveld at golden hour",
					className: "aspect-16/9 max-h-[560px] w-full object-cover"
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-4",
				children: [
					{
						k: "Desk",
						v: "Cranborne, Harare"
					},
					{
						k: "Reach",
						v: "Nationwide delivery"
					},
					{
						k: "Model",
						v: "Sale, hire, commission"
					},
					{
						k: "Season",
						v: "Peak Aug – Dec"
					}
				].map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card px-5 py-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wider text-muted-foreground uppercase",
						children: stat.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium",
						children: stat.v
					})]
				}, stat.k))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
					children: "Five lines. One desk."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "What we put on the ground."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					className: "hidden sm:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						children: ["All services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: service.slug },
					className: index === 0 ? "group relative overflow-hidden rounded-3xl sm:col-span-2 lg:col-span-2" : "group relative overflow-hidden rounded-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-4/3 lg:aspect-auto lg:min-h-80",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
								src: service.image,
								alt: service.imageAlt,
								className: "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-6 text-primary-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-[0.16em] uppercase opacity-80",
									children: service.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 text-2xl font-semibold tracking-tight",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/85",
									children: service.summary
								})
							]
						})
					]
				}, service.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-12 sm:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] uppercase opacity-70",
						children: "Now – December"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Peak season for gold plant, feed mills and rainy-season hire."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/75 sm:text-base",
						children: "August to December is when claims mill, farms mix ration, and sites pour before the storms. If the machine is still “next week”, it is already late."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$slug",
								params: { slug: "hire" },
								children: "Hire a pump or mixer"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							className: "text-primary-foreground hover:bg-primary-foreground/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalogue",
								children: "Open the catalogue"
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
					children: "Catalogue"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "Plant with a price, or a rate."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					className: "hidden sm:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/catalogue",
						children: ["Full catalogue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquipmentCard, { item }, item.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
						children: "How it works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Specify. Quote. On the ground."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-6",
						children: [
							{
								n: "01",
								t: "Tell us the job",
								d: "Ore, cubic metres, herd size, or a photo of the nameplate. Enough to spec, not a tender novel."
							},
							{
								n: "02",
								t: "Quote on WhatsApp",
								d: "Indicative USD or a hire rate, with freight and wet/dry called out. Confirm before you pay."
							},
							{
								n: "03",
								t: "Deliver and commission",
								d: "Harare desk, nationwide trucks. For circuits and mills, we stay until it actually runs."
							}
						].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-10 shrink-0 text-sm font-medium text-muted-foreground tabular-nums",
								children: step.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: step.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted-foreground",
								children: step.d
							})] })]
						}, step.n))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
						src: "/images/jaw-crusher.jpg",
						alt: "Jaw crusher specified for Zimbabwe gold circuits",
						className: "aspect-4/3"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
					children: "Insights"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
					children: "How the plant pays for itself."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "ghost",
					className: "hidden sm:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/insights",
						children: ["All notes ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-3",
				children: insights.slice(0, 3).map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/insights/$slug",
					params: { slug: post.slug },
					className: "group overflow-hidden rounded-3xl bg-card shadow-[0_0_0_1px_rgba(0,0,0,0.06)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
						src: post.image,
						alt: post.imageAlt,
						className: "aspect-16/10"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								post.category,
								" · ",
								post.read
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-lg font-semibold tracking-tight group-hover:text-accent",
							children: post.title
						})]
					})]
				}, post.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 pt-4 pb-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-card px-6 py-12 text-center shadow-[0_0_0_1px_rgba(0,0,0,0.06)] sm:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-semibold tracking-tight sm:text-4xl",
						children: "Need the machine this week?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-lg text-muted-foreground",
						children: "WhatsApp the site, the tonnes or the pour. We will tell you sale, hire, or not yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							variant: "whatsapp",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${site.phoneTel}`,
								children: site.phoneDisplay
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quote",
								children: "Get a quote"
							})
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
