
export default {
    template: `     
          <div class="note-img flex col align-center" >
              <img :src="info.url"/>
          </div>
    `,
    props: ['info'],
    created(){
        console.log('info!!!!', this.info)
    }
}