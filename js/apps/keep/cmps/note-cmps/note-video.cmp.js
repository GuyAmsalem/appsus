
export default {
    template: `     
          <div>
            <iframe width="400" height="300" :src="formattedVidLink"></iframe>
          </div>
    `,
    props: ['info'],
    computed: {
        formattedVidLink() {
            let url = this.info.url
            const vidId = url.substring(url.length -11, url.length)
            return 'https://www.youtube.com/embed/' + vidId 
        }
    }
}



// 'https://www.youtube.com/embed/' + this.info.src.substring()