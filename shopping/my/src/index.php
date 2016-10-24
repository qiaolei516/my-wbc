<?php
    session_start();
//     print_r($_SESSION['user'][0]['username']);
?>

<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="../../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="http://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
    <!--开始-->
    <div class="navbar-wrapper">
        <div class="container">

            <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">wbc7电商网</a>
                    </div>
                    <div id="navbar" class="navbar-collapse collapse">
                        <ul class="nav navbar-nav">
                            <li class="on"><a href="#">首页</a></li>
                            <?php
                                 if (isset($_SESSION['user'][0]['username'])) {
                             ?>
                            <li><a href="denglu.html">欢迎你：<?php echo $_SESSION['user'][0]['username']; ?> </a></li>
                             <?php }else {?>

                            <li><a href="denglu.html">登录/</a></li>
                             <?php } ?>

                            <li id="zhuce"><a href="javascript:;">/注册</a></li>

                            <li id="tuichu"><a href="javascript:;">/退出</a></li>

                            <li><a id="" href="javascript:;">我的订单</a></li>
                            <li id="addAddress"><a  href="javascript:;">收货地址</a></li>
                            <li id="onList"  class="lastLi"  role="presentation" >
                                <a  href="javascript:;">我的购物车<span class="badge">0</span></a>
                                <div class="cart-wp"></div>
                            </li>


                            <script id="cartHandlebars" type="text/handlebars-template">

                                <table id="onShowBtn"  class="table table-bordered">

                                    <tr>
                                        <th>序号</th>
                                        <th>商品名</th>
                                        <th>价格</th>
                                        <th>个数</th>
                                        <th>状态</th>
                                    </tr>

                                    {{#each data}}
                                       <tr id="randerTableList">
                                            <td>{{@index}}</td>
                                            <td>{{title}}</td>
                                            <td>{{price}}</td>
                                            <td>个数</td>
                                            <td>删除</td>
                                          </tr>
                                    {{/each}}
                                </table>
                            </script>
                        </ul>

                    </div>

                </div>
            </nav>

        </div>
    </div>


        <!-- Carousel
        ================================================== -->
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="img/iphone.png" alt="First slide">
                    <div class="container">
                        <div class="carousel-caption">
<!--                            <h1>Example headline.</h1>-->
<!--                            <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>-->
                            <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img class="first" src="img/iphone.png" alt="Second slide">
                    <div class="container">
                        <div class="carousel-caption">
<!--                            <h1>Another example headline.</h1>-->
<!--                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>-->
                            <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAFVVVQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>One more for good measure.</h1>
                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div><!-- /.carousel -->


        <!-- Marketing messaging and featurettes
        ================================================== -->
        <!-- Wrap the rest of the page in another container to center all the content. -->

        <div class="container marketing">

            <!-- Three columns of text below the carousel -->
            <div id="gList" class="row">

            </div>
        </div>


            <!-- START THE FEATURETTES -->

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5">
                    <img class="featurette-image img-responsive" data-src="holder.js/500x500/auto" alt="Generic placeholder image">
                </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-5">
                    <img class="featurette-image img-responsive" data-src="holder.js/500x500/auto" alt="Generic placeholder image">
                </div>
                <div class="col-md-7">
                    <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
            </div>

            <hr class="featurette-divider">

            <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5">
                    <img class="featurette-image img-responsive" data-src="holder.js/500x500/auto" alt="Generic placeholder image">
                </div>
            </div>

            <hr class="featurette-divider">

            <!-- /END THE FEATURETTES -->


            <!-- FOOTER -->
            <footer>
                <p class="pull-right"><a href="#">Back to top</a></p>
                <p>&copy; 2014 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>

        </div><!-- /.container -->

        <!--收货地址对话框-->
        <div class="modal fade" id="tanck">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                        <h4 class="modal-title">收货地址</h4>
                    </div>

        <!--表单-->
                    <form class="form-horizontal" role="form">

                        <div class="form-group">
                            <label  class="col-sm-2 control-label">省：</label>
                            <div class="col-sm-10">

                                <select name="" id="prov">
                                <option value="0">请选择</option>
                                </select>

                            </div>
                        </div>
                        <div class="form-group">
                            <label  class="col-sm-2 control-label">市：</label>
                            <div class="col-sm-10">
                                <select name="" id="city">
                                <option value="0">请选择</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label  class="col-sm-2 control-label">区/县：</label>
                            <div class="col-sm-10">
                                <select name="" id="area">
                                    <option value="0">请选择</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label  class="col-sm-2 control-label">详细地址：</label>
                            <div class="col-sm-10">
                                <textarea id="detail" class="form-control" rows="3"></textarea>

                            </div>
                        </div>


                        <div class="form-group">
                            <label  class="col-sm-2 control-label">姓名：</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="name" placeholder="请填写姓名">
                            </div>
                        </div>

                        <div class="form-group">
                            <label  class="col-sm-2 control-label">手机号：</label>
                            <div class="col-sm-10">
                                <input type="" class="form-control" id="mobiles" placeholder="请输入手机号">
                            </div>
                        </div>

                        <!--<div class="form-group">-->
                            <!--<div class="col-sm-offset-2 col-sm-10">-->
                                <!--<button type="submit" class="btn btn-default">Sign in</button>-->
                            <!--</div>-->
                        <!--</div>-->
                    </form>


            <!--表单-->

                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">保存</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
    <!--收货地址对话框-->

<!--&lt;!&ndash;注册对话框&ndash;&gt;///////////////////////////////////////////-->

    <div id="biaodan" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title">注册</h4>
                </div>
                <!--表单-->
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label  class="col-sm-2 control-label">用户姓名：</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="username" placeholder="请输入用户姓名">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">密码：</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="password" placeholder="Password">
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-sm-2 control-label">Email：</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="email" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label  class="col-sm-2 control-label">手机号：</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="mobile" placeholder="请输入手机号码">
                        </div>
                    </div>


                </form>
           <!--表单-->
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                    <button id="zhuceSave" type="button" class="btn btn-primary">注册</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!--注册对话框////////////////////////////////////////////////-->



<!--  handlebars遍历数组 上传图片 -->

    <script id="gListTpl" type="text/handlebars-template">
        {{#each data}}
              <div class="col-md-3">
                    <div class="thumbnail">
                        <img src="img/p6.png">
                        <div class="caption">
                            <h3 title="{{title}}">{{title}}</h3>
                            <p>商品介绍</p>
                            <p>
                                <a gid="{{id}}"  href="javascript:;" class="btn btn-primary cart-btn" role="button">加入购物车</a>
                                <a href="javascript:;" class="btn btn-default" role="button">立即购买</a>
                            </p>
                        </div>
                    </div>
                </div>
         {{/each}}
    </script>


    <!--  handlebars遍历数组 上传图片 -->



<!--js-->

<script src="../../bower_components/jquery/dist/jquery.min.js"></script>
<script src="../../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="js/city.data-3.js"></script>
<script src="../../bower_components/layer/layer.js"></script>
<script src="../../bower_components/handlebars/handlebars-v4.0.5.js"></script>
<script src="js/index.js"></script>
<script src="js/logout.js"></script>
</body>
</html>
