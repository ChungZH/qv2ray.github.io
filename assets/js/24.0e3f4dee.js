(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{271:function(s,t,a){"use strict";a.r(t);var v=a(17),_=Object(v.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"配置软件使用-qv2ray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置软件使用-qv2ray"}},[s._v("#")]),s._v(" 配置软件使用 Qv2ray")]),s._v(" "),a("p",[s._v("祝贺你! 只剩下一个步骤就可以访问解锁的互联网了！")]),s._v(" "),a("h2",{attrs:{id:"一般方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一般方法"}},[s._v("#")]),s._v(" 一般方法")]),s._v(" "),a("h3",{attrs:{id:"使用系统代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用系统代理"}},[s._v("#")]),s._v(" 使用系统代理")]),s._v(" "),a("p",[s._v("对于 "),a("strong",[s._v("Windows")]),s._v(" 和 "),a("strong",[s._v("macOS")]),s._v(" 用户，几乎所有的应用程序都将遵循系统代理设置。 对于 "),a("strong",[s._v("Linux")]),s._v(" 用户，一些应用程序，如 Firefox 和 Chromium，但不是全部，将在 GNOME/KDE 设置中读取和遵守代理配置。")]),s._v(" "),a("p",[s._v("目前 Qv2ray 支持自动设置系统代理，包括 "),a("strong",[s._v("Windows")]),s._v("、"),a("strong",[s._v("macOS")]),s._v(" 和 "),a("strong",[s._v("Linux")]),s._v("（GNOME/KDE）。 你可以在以下位置找到 Qv2ray 的 "),a("strong",[s._v("System Proxy「系统代理」")]),s._v(" 选项：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("Qv2ray 托盘菜单")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("右键点击托盘图标")])]),s._v(" "),a("li",[a("p",[s._v("在弹出的菜单中选择 "),a("strong",[s._v("System Proxy「系统代理」 -> Enable/Disble System Proxy「开启/关闭 系统代理」")]),s._v("。")])])])]),s._v(" "),a("li",[a("p",[s._v("Qv2ray "),a("strong",[s._v("Preference「首选项」")]),s._v(" 窗口")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("单击主窗口中的 "),a("strong",[s._v("Preferences「首选项」")]),s._v(" 按钮")])]),s._v(" "),a("li",[a("p",[s._v("在 "),a("strong",[s._v("Preferences「首选项」")]),s._v(" 窗口里选择 "),a("strong",[s._v("Inbound Settings「入站设置」")])])]),s._v(" "),a("li",[a("p",[s._v("选择 "),a("strong",[s._v("Set System Proxy「设置系统代理」")]),s._v(" 选项")])]),s._v(" "),a("li",[a("p",[s._v("点击 "),a("strong",[s._v("OK")]),s._v(" 应用设置")])])])])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Linux 用户：KDE/GNOME 代理设置")]),s._v(" "),a("p",[s._v("如果您使用 GNOME 作为您的主要桌面环境，您可能会发现设置系统代理非常有用。 这是因为 GNOME 代理设置几乎是全世界公认的。")]),s._v(" "),a("p",[s._v("但是，KDE 用户可能会遇到一些困难，因为 KDE 代理设置更像是一个玩具。 即使是 KDE 应用程序本身也不会读取和遵守这种配置。 在这种情况下，您可以寻找其他解决方案来配置您的应用程序。")])]),s._v(" "),a("h3",{attrs:{id:"在应用程序中手动设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在应用程序中手动设置"}},[s._v("#")]),s._v(" 在应用程序中手动设置")]),s._v(" "),a("h4",{attrs:{id:"网页浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页浏览器"}},[s._v("#")]),s._v(" 网页浏览器")]),s._v(" "),a("p",[s._v("几乎所有的 web 浏览器都支持代理的手动配置。 以 Firefox 为例，你可以在 "),a("strong",[s._v("Preferences「首选项」 -> General 「常规」 -> Network「网络」 -> Manual Proxy Configuration「手动代理设置」")]),s._v(" 中找到这个设置。 用 Qv2ray "),a("strong",[s._v("Inbound Settings「入站设置」")]),s._v(" 中的信息填充这些字段以使用 Qv2ray。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("使用代理插件")]),s._v(" "),a("p",[s._v("为了避免在代理服务器配置之间来回切换，您可能需要使用第三方插件（例如：SwitchyOmega）来增强您的浏览器。 这些插件可以帮助实现更复杂的配置，包括多个配置文件和进一步的流量转移。")])]),s._v(" "),a("h4",{attrs:{id:"java-应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-应用程序"}},[s._v("#")]),s._v(" Java 应用程序")]),s._v(" "),a("p",[s._v("对于 Java 应用程序，您可以通过 JVM 参数使用代理配置。")]),s._v(" "),a("p",[s._v("以下是一些例子：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用 SOCKS5:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("java -DsocksProxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -DsocksProxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1088")]),s._v(" -jar some-application.jar\n")])])])]),s._v(" "),a("li",[a("p",[s._v("使用 HTTP(S)：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("java -Dhttp.proxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -Dhttp.proxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(" -Dhttps.proxyHost"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -Dhttps.proxyPort"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v(" -jar some-application.jar\n")])])])])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("神奇的 Minecraft")]),s._v(" "),a("p",[s._v("新版本的 "),a("strong",[s._v("Minecraft 我的世界")]),s._v("(1.5.2) 不会遵循 JVM 代理设置。这不是 Qv2ray 的问题。 如果你真的想通过代理来玩 Minecraft，可以考虑为那个服务器设置一个 Dokodemo-door 任意门入站，并直接连接到 "),a("code",[s._v("localhost")]),s._v("。")])]),s._v(" "),a("h2",{attrs:{id:"依赖平台的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖平台的方法"}},[s._v("#")]),s._v(" 依赖平台的方法")]),s._v(" "),a("h3",{attrs:{id:"使用环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用环境变量"}},[s._v("#")]),s._v(" 使用环境变量")]),s._v(" "),a("p",[s._v("Linux / macOS 中的许多程序，例如 "),a("code",[s._v("curl")]),s._v(" 和 "),a("code",[s._v("wget")]),s._v("，都会使用 "),a("code",[s._v("<PROTOCOL>_PROXY")]),s._v(" 环境变量提供的代理。")]),s._v(" "),a("p",[s._v("这是一个配置示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Change the host and port according to Qv2ray inbound configuration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:8000"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:8000"')]),s._v("\n")])])]),a("p",[s._v("如果 Qv2ray 中启用了身份验证，请使用以下设置：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Change user/pass according to your configuration")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTP_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://user:pass@127.0.0.1:8000"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://user:pass@127.0.0.1:8000"')]),s._v("\n")])])]),a("p",[s._v("请注意，如果您的用户名或密码中有一个特殊字符，则需要对其进行编码。 这里有一个简短的参考：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("code",[s._v("!")])]),s._v(" "),a("th",[a("code",[s._v("#")])]),s._v(" "),a("th",[a("code",[s._v("$")])]),s._v(" "),a("th",[a("code",[s._v("&")])]),s._v(" "),a("th",[a("code",[s._v("'")])]),s._v(" "),a("th",[a("code",[s._v("(")])]),s._v(" "),a("th",[a("code",[s._v(")")])]),s._v(" "),a("th",[a("code",[s._v("*")])]),s._v(" "),a("th",[a("code",[s._v("+")])]),s._v(" "),a("th",[a("code",[s._v(",")])]),s._v(" "),a("th",[a("code",[s._v("/")])]),s._v(" "),a("th",[a("code",[s._v(":")])]),s._v(" "),a("th",[a("code",[s._v(";")])]),s._v(" "),a("th",[a("code",[s._v("=")])]),s._v(" "),a("th",[a("code",[s._v("?")])]),s._v(" "),a("th",[a("code",[s._v("@")])]),s._v(" "),a("th",[a("code",[s._v("[")])]),s._v(" "),a("th",[a("code",[s._v("]")])])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("%21")])]),s._v(" "),a("td",[a("code",[s._v("%23")])]),s._v(" "),a("td",[a("code",[s._v("%24")])]),s._v(" "),a("td",[a("code",[s._v("%26")])]),s._v(" "),a("td",[a("code",[s._v("%27")])]),s._v(" "),a("td",[a("code",[s._v("%28")])]),s._v(" "),a("td",[a("code",[s._v("%29")])]),s._v(" "),a("td",[a("code",[s._v("%2A")])]),s._v(" "),a("td",[a("code",[s._v("%2B")])]),s._v(" "),a("td",[a("code",[s._v("%2C")])]),s._v(" "),a("td",[a("code",[s._v("%2F")])]),s._v(" "),a("td",[a("code",[s._v("%3A")])]),s._v(" "),a("td",[a("code",[s._v("%3B")])]),s._v(" "),a("td",[a("code",[s._v("%3D")])]),s._v(" "),a("td",[a("code",[s._v("%3F")])]),s._v(" "),a("td",[a("code",[s._v("%40")])]),s._v(" "),a("td",[a("code",[s._v("%5B")])]),s._v(" "),a("td",[a("code",[s._v("%5D")])])])])]),s._v(" "),a("p",[s._v("对于在 "),a("code",[s._v("sudo")]),s._v(" 中运行的程序，如果不在 shell 中运行 "),a("code",[s._v("sudo")]),s._v("，则需要配置 "),a("code",[s._v("sudo")]),s._v(" 来保留这些变量。 使用 root 调用 "),a("code",[s._v("visudo")]),s._v(" 并添加以下行：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Defaults env_keep "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HTTP_PROXY HTTPS_PROXY"')]),s._v("\n")])])]),a("p",[s._v("尽管如此，仍然有一些程序使用自己的变量，例如，"),a("code",[s._v("rsync")]),s._v(" 对 HTTP 代理使用 "),a("code",[s._v("RSYNC_PROXY")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RSYNC_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("user:pass@127.0.0.1:8000\n")])])]),a("p",[s._v("强烈建议您阅读要用来配置代理的程序手册。")]),s._v(" "),a("h3",{attrs:{id:"使用-proxychains"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-proxychains"}},[s._v("#")]),s._v(" 使用 "),a("code",[s._v("proxychains")])]),s._v(" "),a("p",[s._v("对于那些不能使用上述方法的应用程序，Linux/ macOS 用户可以尝试使用 "),a("code",[s._v("proxychains")]),s._v("，它劫持 "),a("code",[s._v("glibc")]),s._v(" 中的函数，将网络连接重定向到代理。")]),s._v(" "),a("p",[s._v("首先，应该安装 "),a("code",[s._v("proxychains-ng")]),s._v("。 安装方法因操作系统的不同而不同，但是"),a("a",{attrs:{href:"https://github.com/rofl0r/proxychains-ng",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方项目"),a("OutboundLink")],1),s._v("应该给你一个说明。")]),s._v(" "),a("p",[s._v("编辑 "),a("code",[s._v("/etc/proxychains.conf")]),s._v("（用于全局 proxychains）或 "),a("code",[s._v("$HOME/.proxychains/proxychains.conf")]),s._v("（对于用户），编辑 "),a("code",[s._v("[ProxyList]")]),s._v(" 选项并更改为 Qv2ray 中的 SOCKS5 代理：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[ProxyList]\nsocks5  127.0.0.1  1088\n")])])]),a("p",[s._v("在配置 "),a("code",[s._v("proxychains")]),s._v(" 之后，您可以在终端使用 "),a("code",[s._v("proxychains")]),s._v(" 程序使 "),a("code",[s._v("proxychains")]),s._v(" 劫持程序使用给定的代理。 如果您厌倦了嘈杂的输出，您可能会在 "),a("code",[s._v("proxychains")]),s._v(" 之后附加 "),a("code",[s._v("-q")]),s._v(" 选项。")]),s._v(" "),a("p",[s._v("需要注意的一点是，"),a("code",[s._v("proxychains")]),s._v(" 不能用于静态链接的程序，例如 Golang 程序。")])])}),[],!1,null,null,null);t.default=_.exports}}]);