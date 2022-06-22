<template>
    <div class="bg-white w-100 h-100">
        <div class="container p-5">
            <div class="row">
                <div class="col-md-4">
                    <h5>Your timezone is: <span style="color: #029e20">{{ userTimeZone }}</span></h5>
                    <p>If this is not your timezone please change in the timezone list below. This will be used by the
                        system to
                        schedule the lessons with your students who living in a different timezone.</p>
                    <select class="form-select" @change="selectedTimeZOne" v-model="userTimeZone">
                        <option selected>{{ userTimeZone }}</option>
                        <option v-for="(timezone, index) in getTimeZone()" :key="index" :value="timezone">{{
                                timezone + " " + timezoneDisplay(new Date(),
                                    timezone).format("Z")
                        }}</option>
                    </select>
                </div>
                <div class="col-md-8">
                    <h3 class="text-center">Choose your availability time.</h3>
                    <div class="row border p-4">
                        <div class="col-md-4 days-container">
                            <ul>
                                <li v-for="(day, index) in days" :key="index" @click="selectWeekDay(index)"
                                    class="weekDay" :class="index === selectedDayIndex ? 'activeDay' : ''">{{ day }}
                                </li>
                            </ul>
                        </div>
                        <!-- Days slots -->
                        <Monday v-if="selectedDayIndex === 0"/>
                        <Tuesday v-if="selectedDayIndex === 1"/>
                        <Wednesday v-if="selectedDayIndex === 2"/>
                        <Thursday v-if="selectedDayIndex === 3"/>
                        <Friday v-if="selectedDayIndex === 4"/>
                        <Saturday v-if="selectedDayIndex === 5"/>
                        <Sunday v-if="selectedDayIndex === 6"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <p class="text-success" v-for="(timezone, index) in getTimeZone()" :key="index">My time zone is:
            {{ timezoneDisplay(new Date(), timezone).format("Z")
                    + " " + timezone
            }}</p> -->
    <!-- <ul>
            <li v-for="(timezone, index) in timezoneDetails" :key="index">{{ timezoneDisplay(new Date(),timezone) + " " + timezone  }}</li>
        </ul> -->
</template>

<script>
import moment from 'moment-timezone'
import Monday from './DaysComponent/Monday.vue'
import { mapState } from 'vuex'
import Tuesday from './DaysComponent/Tuesday.vue'
import Wednesday from './DaysComponent/Wednesday.vue'
import Thursday from './DaysComponent/Thursday.vue'
import Friday from './DaysComponent/Friday.vue'
import Saturday from './DaysComponent/Saturday.vue'
import Sunday from './DaysComponent/Sunday.vue'
export default {
    name: 'TimeZOne',
    components: {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
},
    data() {
        return {
            timezoneDetails: '',
            userTimeZone: '',
            days: [
                'MONDAY',
                'TUESDAY',
                'WEDNESDAY',
                'THURSDAY',
                'FRIDAY',
                'SATURDAY',
                'SUNDAY'
            ]
        }
    },
    methods: {
        selectWeekDay(i) {
            this.$store.commit({
                type: 'setDayIndex',
                dayIndex: i
            })
        },

        // showZone() {
        //     console.log(this.userTimeZone);
        // },
        // selectedTimeZOne() {
        //     console.log(this.userTimeZone);
        // },
        getTimeZone() {
            return moment.tz.names();
        },
        timezoneDisplay(d, tZone) {
            return moment.tz(d, tZone);
            //   return  moment.tz(d,tZone).format("DD-MM-YYYY h:mm:ss a");
            //   return  moment.tz(d,tZone).format("DD-MM-YYYY h:mm:ss a");
        },
        defaultTimeZone() {
            this.userTimeZone = moment.tz.guess()
        }
    },
    mounted() {
        this.getTimeZone()
        this.defaultTimeZone()
    },
    computed: {
       ...mapState({
         selectedDayIndex: state => state.selectedDayIndex
       })
    },
}
</script>

<style scoped>


.activeDay {
    background-color: #029e02;
    padding: 10px;
    text-align: center;
    color: white !important;
}

.weekDay {
    border: 1px solid #029e02;
    border-radius: 5px;
    color: #029e02;
    padding: 10px;
    margin-bottom: 15px;
    list-style: none;
    text-align: center;
}

.weekDay:hover {
    background-color: #029e20;
    cursor: pointer;
    color: white;
}

</style>