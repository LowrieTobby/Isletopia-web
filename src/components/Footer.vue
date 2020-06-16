<template>
  <div>
    <footer>
      <div class="container">
        <div class="footer-links">
          <div class="row">
            <div class="col-lg-4 mb-5">
              <a href="/">
              <img
                class
                src="@/assets/img/logo_text.svg"
                alt="logo"
                style="width: 140px;height:inherit;filter:invert(1);"
                
              />
              </a>
            </div>
            <div class="col-lg-8 mt-md-5 mt-lg-0">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <ul>
                    <li class="title">常用链接</li>
                    <li>
                      <a href="/log">更新日志</a>
                    </li>
                    <li>
                      <a href="/help">支持与帮助</a>
                    </li>
                    <li>
                      <a href="https://afdian.net/@molean">赞助我们 <font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs"/></a>
                    </li>
                    <li>
                      <a href="/about">关于梦幻屿</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 col-sm-6">
                  <ul>
                    <li class="title">友情链接</li>
                    <li>
                      <a href="https://namemc.com/server/play.molean.com?q=play.molean.com">NameMC <font-awesome-icon :icon="['fas', 'external-link-alt']"  size="xs"/></a>
                    </li>
                    <li>
                      <a href="https://www.mcbbs.net/thread-949407-1-1.html">MCBBS宣传贴 <font-awesome-icon :icon="['fas', 'external-link-alt']"  size="xs"/></a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 col-sm-6">
                  <ul>
                    <li class="title">玩法&功能</li>
                    <li>
                      <a href="https://skin.molean.com">皮肤站 <font-awesome-icon :icon="['fas', 'external-link-alt']" size="xs" /></a>
                    </li>
                    <li>
                      <a href="/craft">高级合成表</a>
                    </li>
                    <li>
                      <a href="/McMMO">McMMO</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-info text-center">
        <div class="info-line">
          Designed with
          <font-awesome-icon :icon="['fas', 'heart']" size="sm" /> by
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVUlEQVQ4y6WTPUhCYRSGn+/ez59QQQXJCDE3CwoSgpa2mqKtoWYXx4baWsKhpZpb2grcjBpa3FragoJsKSkIK0mLm4Kp9zZo+U+mL5zhe895HzhwPuhTxj5jAAqAtmXT33aCucfDsP+vYPok7NeOptMV1Xb/C1BKeWF9v3W67mKpp4Pl7W7h1/jKmucllrJrl161khcAAiC/iSEkqFZQLWAMOUoSzdQYLptcRVnKWRo9EUFIAKsHlKZWcxigNfyj6goW+pbSakQTQaKJIL36CgNqYIBsNUIBZ8fBbr6oXZXR1jE5iJ6NEgo4WRxPwtdHeziCqAPcU+BfAu9ctTrp+bxaD6eQvWoApC8M3JPNw7t7oOv198Z6cz97jRiZrQGK+fYVMhmIH4OU4PPBwnz7ChZbFaAXckWhms3/+o3lgq7YPKoEEKp5+PMmlgRD9gqwT6zOAHwDQthmtXqUpGMAAAAASUVORK5CYII="
            alt
            height
          />
          <strong>Lowrie</strong>
        </div>
        <div class="copy-right">© 2020 梦幻之屿</div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "foo"
};
</script>

<style scoped>
footer {
    color: #fff;
    margin-top: 0px;
    background-color: #3A3A3A;
}

footer ul {
    padding: 0px;
}

footer ul li {
    list-style: none;
    font-size: 0.875rem
}

footer ul li a {
    color: #a0a0a0;
}

footer ul li a:hover {
    color: #d6d6d6;
}

footer .title {
    font-size: 1.2rem;
    margin-bottom: 8px
}

footer .footer-info {
    padding: 10px 0px;
    background-color: #2c2c2c;
    font-size: 0.875rem;
    color: #d9d9d9;
}
footer .footer-links {
    padding-top: 40px;
    margin-bottom: 5px;
}

footer .footer-info .info-line a{
    color: #fff;
}
footer .footer-info .info-line a:hover{
    color: #fff;
}
@media (max-width: 768px) {
    .container{
        padding: 0px 15px !important;
    }
}
</style>