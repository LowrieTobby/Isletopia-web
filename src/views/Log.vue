<template>
  <div class="container">
    <div class="mt-3">
      <div class="row">
        <div class="col-lg-3 order-lg-3 pd-5">
          <div class="right-panel">

            
            <div class="alert alert-warning alert-dismissible fade show box-shadow" role="alert">
              <font-awesome-icon :icon="['fas', 'exclamation-circle']" /> 该页面还在开发中
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            
            <div class="alert alert-primary alert-dismissible fade show box-shadow" role="alert">
              <strong><font-awesome-icon :icon="['fas', 'question-circle']" /> 这是什么</strong> 
              <p>这个页面展示服务器更新日志的相关内容，在这里可以了解服务器最新变动</p>
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>

        <div class="col-lg-3 order-lg-1 pd-5">
          <div class="left-panel" style="display: none;">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 order-sm-2 pd-5">
          <div class="center-panel">
            <div class="card box-shadow">
              <div class="card-body">
                <h5 class="card-title">2020-6-1 更新</h5>
                <h6 class="card-subtitle mb-3 text-muted">2020-6-1</h6>
                <div class="card-content">
                  <p>
                    Bootstrap’s grid includes five tiers of predefined classes for building complex
                    responsive layouts
                  </p>
                  <ul>
                    <li>Add some bugs</li>
                    <li>Add more bugs</li>
                    <li>Add more and more bugs</li>
                    <li>...</li>
                  </ul>
                  <p>
                    Bootstrap’s grid includes five tiers of predefined classes for building complex
                    responsive layouts. Customize the size of your columns on extra small, small,
                    medium, large, or extra large devices however you see fit.
                  </p>
                </div>
              </div>
            </div>

            <div class="card box-shadow">
              <div class="card-body">
                <h5 class="card-title">2020-5-31 日常更新</h5>
                <h6 class="card-subtitle mb-3 text-muted">2020-5-31</h6>
                <div class="card-content">
                  <ul>
                    <li>Add some bugs</li>
                    <li>Add more bugs</li>
                    <li>Add more and more bugs</li>
                    <li>...</li>
                  </ul>
                  <p>detailed content..</p>
                </div>
              </div>
            </div>

            <div class="card box-shadow">
              <div class="card-body">
                <h5 class="card-title">2020-5-31 日常更新</h5>
                <h6 class="card-subtitle mb-3 text-muted">2020-5-31</h6>
                <div class="card-content">
                  <ul>
                    <li>Add some bugs</li>
                    <li>Add more bugs</li>
                    <li>Add more and more bugs</li>
                    <li>...</li>
                  </ul>
                  <p>detailed content..</p>
                </div>
              </div>
            </div>

            <div class="card box-shadow">
              <div class="card-body">
                <h5 class="card-title">2020-5-31 日常更新</h5>
                <h6 class="card-subtitle mb-3 text-muted">2020-5-31</h6>
                <div class="card-content">
                  <ul>
                    <li>Add some bugs</li>
                    <li>Add more bugs</li>
                    <li>Add more and more bugs</li>
                    <li>...</li>
                  </ul>
                  <p>detailed content..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  margin-bottom: 7px;
}
.card .card-body .card-subtitle {
  font-size: 0.8rem;
}
.content-wrapper {
  margin-top: 20px;
}
.pd-5 {
  padding-left: 3.5px;
  padding-right: 3.5px;
}
.center-panel .card:last-child {
  margin-bottom: 20px;
}
.text-muted {
  color: var(--primary) !important;
}

.alert{
  margin-bottom: 7px;
}
</style>