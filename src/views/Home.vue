<template>
  <div class="container">
    <!--  body section 1 -->
    <div class="section-first">
      <div class="row">
        <div class="col-lg-6">
          <div class="img-wrapper">
            <img src="@/assets/img/island.png" class="img-fluid" alt="island" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-title mt-3">
            <img src="@/assets/img/island_title.png" class="img-fluid" alt="island_title" />
            <div class="section-text">
              <h3>
                <strong>只有一个空岛</strong>
              </h3>
              <p>与原版极为接近的游戏体验，即使是多人也能很好地配合。近乎无限制的岛屿，让你的世界无限可能。</p>
            </div>
          </div>
          <div class="section-download">
            <div class="row">
              <div class="col-lg-5 mb-2">
                <a href="http://cdn.molean.com/Client.zip" class="btn btn-block btn-lg btn-primary">
                  <font-awesome-icon :icon="['fas', 'download']" />下载客户端
                  <br />
                  <span>1.15.2</span>
                </a>
              </div>
              <div class="col-lg-7">
                <div class="badges">
                  <a href>
                    <img
                      src="https://img.shields.io/badge/Launcher-HMCL-orange"
                      alt="Launcher-HMCL"
                    />
                  </a>
                  <a href>
                    <img
                      src="https://img.shields.io/badge/version-1.15.2-blue?style=?style=plastic&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAd0lEQVQ4jb2S2w2AIBAELYESLIEOpBQ7g068zsaf05yKgvjYZBNYNhOO0HVvCPBABKZKR8BbQOK+kgVIA0CyAJMFUw4m/xgADOpRc9H1khcBh0LpPFdYr3wy0g8AwJm5XQsgXOyLgBptAI+/sleIVDoB/f6hmzQD1OaiJSpPTDUAAAAASUVORK5CYII="
                      alt="version-1.15.2"
                    />
                  </a>
                  <a href>
                    <img
                      src="https://img.shields.io/badge/OptiFine-HD_U_G1_pre19-blue"
                      alt="OptiFine-HD_U_G1_pre19"
                    />
                  </a>
                  <a href>
                    <img src="https://img.shields.io/badge/Fabric-0.8.5-blue" alt />
                  </a>
                  <a href>
                    <img src="https://img.shields.io/badge/size-280M-lightgray" alt />
                  </a>
                  <a href>
                    <img src="https://img.shields.io/badge/MOD-VoxelMap | 12+-success" alt />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <div class="section-copy-ip">
              <div class="copy-info">
                <font-awesome-icon :icon="['fas', 'question-circle']" />已有客户端？复制服务器IP直接连接
              </div>
              <div class="input-group mb-3" style="max-width: 210px">
                <input
                  readonly
                  type="text"
                  id="ip"
                  class="form-control"
                  aria-describedby="button-copy"
                  :value="ip"
                />
                <div class="input-group-append">
                  <button
                    id="copy-to-clipboard"
                    class="btn btn-outline-secondary copy-to-clipboard"
                    type="button"
                    @click="copy(ip)"
                  >
                    <font-awesome-icon :icon="['fas', 'clipboard']" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="row">
        <div class="col-lg-6 order-lg-1">
          <div class="section-text">
            <h3>
              <strong>H3标题文本</strong>
            </h3>
            <p>正文内容，用简短的一句话或者一段话概括服务器的一个特性。布局为两栏布局，一侧展示文案，另一侧展示图片。</p>
          </div>
        </div>
        <div class="col-lg-6 order-lg-2">
          <img src="assets/img/pic.png" class="img-fluid" alt="island" />
        </div>
      </div>
    </div>

    <div class="section">
      <div class="row">
        <div class="col-lg-6 order-lg-2">
          <div class="section-text">
            <h3>
              <strong>H3标题文本</strong>
            </h3>
            <p>正文内容，用简短的一句话或者一段话概括服务器的一个特性。布局为两栏布局，一侧展示文案，另一侧展示图片。</p>
          </div>
        </div>
        <div class="col-lg-6 order-lg-1">
          <img src="assets/img/pic.png" class="img-fluid" alt="island" />
        </div>
      </div>
    </div>

    <div class="section">
      <div class="row">
        <div class="col-lg-6 order-lg-1">
          <div class="section-text">
            <h3>
              <strong>H3标题文本</strong>
            </h3>
            <p>正文内容，用简短的一句话或者一段话概括服务器的一个特性。布局为两栏布局，一侧展示文案，另一侧展示图片。</p>
          </div>
        </div>
        <div class="col-lg-6 order-lg-2">
          <img src="assets/img/pic.png" class="img-fluid" alt="island" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clipboard from "clipboard";

export default {
  data() {
    return {
      ip: "play.molean.com"
    };
  },
  methods: {
    copy(string) {
      let clipboard = new Clipboard("#copy-to-clipboard", {
        text: function() {
          return string;
        }
      });
    clipboard.on('success', function(e) {
        //to do

        clipboard.destroy()
    });

    clipboard.on('error', function(e) {
        //to do

        clipboard.destroy()
    });
    }
  }
};
</script>

<style>
.section {
  margin-bottom: 70px;
  display: none;
}

.section-first {
  margin-top: 50px;
}


.section-text h3 {
  font-size: 2rem;
}

.badges {
  float: left;
}

.badges a {
  margin-right: 4px;
}

.section-text {
  font-size: 1.5rem;
  color: #3a3a3a;
  margin-top: 80px;
}

.section-download {
  margin-top: 80px;
}

.section-copy-ip {
  margin-top: 30px;
}

.section-copy-ip .copy-info {
  font-size: 0.875rem;
  margin-bottom: 5px;
  color: #898989;
}

@media (max-width: 768px) {
  .section-text {
    margin-top: 40px;
  }
  .section-download {
    margin-top: 40px;
  }
  .section-text {
    font-size: 1rem;
  }
  .section-text h3 {
    font-size: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .section-first .img-wrapper {
    padding: 0px 75px;
    margin-bottom: 65px;
  }
}
</style>