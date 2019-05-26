<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__inner">
        <ul class="list-service clearfix">
          <li><a href="javascript:;"><i class="iconfont icon-buoumaotubiao46"></i>预约维修服务</a></li>
          <li><a href="javascript:;"><i class="iconfont icon-7tianwuliyoutuihuo"></i>7天无理由退货</a></li>
          <li><a href="javascript:;"><i class="iconfont icon-15tianwuliyoutuihuo"></i>15天免费换货</a></li>
          <li><a href="javascript:;"><i class="iconfont icon-lipin"></i>满150元包邮</a></li>
          <li><a href="javascript:;"><i class="iconfont icon-map"></i>520余家售后网点</a></li>
        </ul>
      </div>
      <div class="auther"><p>by:付亮亮</p></div>
    </div>
  </footer>
</template>

<script>

    export default {
    }
</script>

<style scoped>
  .footer{
    background-color: #fff;
  }
  .footer__inner{
    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
  }
.footer .list-service{
  list-style: none;
  margin: 0;
  padding: 0;
}
  .footer .list-service a{
    color: #616161;
  }
  .footer .list-service a:hover{
    color: #df2283;
  }
  .footer .list-service li{
    float: left;
    width: 19.8%;
    height: 25px;
    border-left: 1px solid #e0e0e0;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  }
  .footer .list-service li:first-child{
    border-left: none;
  }
  .footer .list-service li .iconfont{
    margin-right: 6px;
    font-size: 24px;
    line-height: 24px;
    vertical-align: -4px;
  }
.auther{
  padding: 25px 0;
}
  .auther p{
    text-align: center;
  }

  @media only screen and (max-width: 768px){
    .footer .footer__inner{
      display: none;
    }
  }
</style>
