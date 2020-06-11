<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light box-shadow fixed-top">
        <div class="container">

            <a class="navbar-brand" href="#"><img src="@/assets/img/logo.png" width="90.8" height="auto" class="" alt="梦幻之屿"></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="http://play.molean.com">首页 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://skin.molean.com">皮肤站</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">更新日志</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">入服指南</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">常见问题</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">加入我们</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
}
</script>

<style scoped>

</style>