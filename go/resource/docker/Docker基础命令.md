# Docker基础命令

## 查看所有容器
<pre>docker ps -a</pre>
## 查看所有镜像
<pre>docker images -a</pre>
## 下载镜像
<pre>docker pull mysql</pre>
## 创建容器mysql容器
<pre>winpty docker run --name work-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql</pre>
> --name 指定该容器名字
> -p 	映射端口  宿主机端口:容器端口
> -e    MYSQL_ROOT_PASSWORD 指定mysql root 密码
> -d    后台进程模式
## 查看指定容器底层信息
<pre>docker inspect containerName</pre>
详细信息[官方文档](https://docs.docker.com/engine/reference/commandline/inspect "https://docs.docker.com/engine/reference/commandline/inspect")
## 查看所有容器ip地址
<pre>docker inspect --format='{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $(docker ps -aq)</pre>
## 创建fpm容器
<pre>winpty docker run -d --name work-fpm -v /E:/phpstudy/WWW:/usr/share/nginx/html bitnami/php-fpm</pre>
## 创建Nginx容器
<pre>winpty docker run -d --name work-nginx -p 80:80 -v /E:/phpstudy/WWW:/usr/share/nginx/html nginx</pre>
> -v    映射共享目录 宿主目录:容器目录   **目录前面必须要有/ window下为/c:/windows/xxx**
## 复制文件
docker cp /E:/default.conf work-nginx:/etc/nginx/conf.d/default.conf
## 登录容器
docker exec -it mysql bash
> -i    --interactive，交互模式
> -t    --tty，开启一个伪终端
> bash  * 进入命令行页面
## 容器基本操作
docker start|stop|restart *containerName*
## 查看容器日志
<pre>docker logs -f -t --since="datetime" --tail=10 xxx</pre>
> -f 查看实时日志
> -t 查看日志产生的日期
> --tail 查看最后的10条日志
> 788600d51ff429b4135823d7eb42efe06e01c78f562f4beb6d3fad8801623da9