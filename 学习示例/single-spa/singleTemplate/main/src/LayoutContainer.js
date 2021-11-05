/*
 * @Description: mainRoute
 * @Version: mainRoute
 * @Author: BeSmile
 * @Date: 2021-11-05 11:31:03
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-05 14:03:41
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerApplication, start } from "single-spa";
import { loadResources } from "./utils";

export default function LayoutContainer() {
  const [settings, setSetting] = useState({ fixSiderbar: true });
  const [pathname, setPathname] = useState("/");
  const history = useNavigate();

  return (
    <div>
      <div>
        <div onClick={() => history("/home")}>child1</div>
        <div onClick={() => history("/about")}>child2</div>
      </div>
      <div>
        <div id="container"></div>
      </div>
    </div>
  );
}

// 配置子应用
const apps = [
  {
    name: "home",
    host: "http://localhost:3001",
    match: /^\/home/,
  },
  {
    name: "about",
    host: "http://localhost:3002",
    match: /^\/about/,
  },
];
// 注册应用
for (let i = 0, app = null; i < apps.length; i++) {
  app = apps[i];
  registerApplication({
    name: app.name,
    app: async (arg) => {
      // 这里会去加载远程资源，加载完毕后，子应用暴露出 single-spa 需要的生命周期函数
      await loadResources(app.host);
      console.log(app.host, "register");
      return window[app.name];
    },
    activeWhen: `/${app.name}`,
    customProps: {}
  });
}
// 启动
start();