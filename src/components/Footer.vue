<template>
    <div class="footer">
        <ul>
            <li>
                <router-link to="#">HOME</router-link>
            </li>
            <li>
                <router-link to="#">TOP SHOWS</router-link>
            </li>
            <li>
                <router-link to="#">TOP MOVIES</router-link>
            </li>
            <li>
                <router-link to="#">WATCH LIST</router-link>
            </li>
            <li>
                <router-link to="#">HELP</router-link>
            </li>
            <li>
                <router-link to="#">CONTACT</router-link>
            </li>
            <li>
                <router-link to="#">DOWNLOAD APP</router-link>
            </li>
            <li>
                <router-link to="#">ABOUT</router-link>
            </li>
        </ul>
        <ul>
            <li>
                <router-link to="#">
                   Copyright &copy; {{ new Date().getFullYear() }} gloria force.
                </router-link>
            </li>
            <li>
                <router-link to="#">Home of movies.</router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
    padding: 20px;
    margin-top: 130px;
    background-color: #010101;
}

.footer ul:nth-child(1){
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 40px;
    margin: 0;
    gap: 25px;

}
.footer ul:nth-child(1) li a{
    text-decoration: none;
    color: white;
    font-weight: 600;
}
.footer ul:nth-child(1) li:first-child a{
    background-color:  var(--theme-color-red);
    padding: 10px 20px;
}

.footer ul:nth-child(2) {
    display: flex;
    list-style: none;
    gap: 25px;
    justify-content: center;
    padding: 0px 0px 15px 0px;
    margin: 0;
}
.footer ul:nth-child(2) li a{
    color: rgb(180, 180, 180);
    text-decoration: none;
}
</style>