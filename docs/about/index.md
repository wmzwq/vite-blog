---
layout: page
---
  <div class="about-page">
    <div class="about-card">
      <div class="avatar"><img src="/profile.jpg" alt /></div>
      <div class="card">
        <div class="bio">
          <div class="head"><span> McGee </span></div>
          <div class="info"><span> Work at South Tech </span></div>
          <div class="description">
            <p>
              我叫汪名州，坐标浙江。
              我是计算机专业出身,对前端很感兴趣，所以从大学开始自学前端，今后的职业规划是朝着全栈工程师前进。
              初来乍到，可以负责整个页面的前端
              开发，配合后台人员实现产品前端界面效果与功能。写过响应式页面，pc
              端页面。
            </p>
            <p>
              不浮躁，喜欢前端，执行力，学习能力都很好，特别喜欢专研各种‘疑难杂症’！喜欢尝试不同的新框架与类库.
            </p>
            <p>生活是一种绵延不绝的渴望,渴望不断上升,变得更伟大而高贵.</p>
          </div>
        </div>
        <div class="interests"><span> </span></div>
        <div class="socials">
          <div>
            <a href="https://github.com/wmzwq/vuepress-myblog" target="_blank"
              ><img src="/icons/github.svg" alt="github" title="github"
            /></a>
          </div>
          <div>
            <a target="_blank"
              ><img src="/icons/linkedin.svg" alt="linkedin" title="linkedin"
            /></a>
          </div>
          <div>
            <a target="_blank"
              ><img
                src="/icons/instagram.svg"
                alt="instagram"
                title="instagram"
            /></a>
          </div>
          <div>
            <a href="1966640056.com" target="_blank"
              ><img src="/icons/email.svg" alt="email" title="email"
            /></a>
          </div>
        </div>
        <div class="actions">
          <div>
            <a href="/projects/" target="" class="button"> Projects </a>
          </div>
          <div><a href="/guide/" target="" class="button"> Blog </a></div>
          <div><a href="/article/" target="" class="button"> CV </a></div>
        </div>
      </div>
    </div>
  </div>




<script setup>
</script>
<style lang="less" scoped>
.about-page {
  background-color: #e6ecf0;
  /* height:100vh; */
  .about-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .avatar {
      position: relative;
      z-index: 1;
      img {
        display: block;
        width: 100%;
        height: auto;
        max-width: 150px;
        border-radius: 500rem;
      }
    }
    .card {
      max-width: 600px;
      width: 100%;
      position: relative;
      top: -75px;
      padding-top: 75px;
      margin-left: auto;
      margin-right: auto;
      background: #fff;
      box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
      border-radius: 0.3rem;
      text-align: center;
      .bio {
        padding: 1em;
        .head {
          font-weight: 700;
          font-size: 1.3em;
        }
        .info {
          padding-top: 0.5rem;
          font-size: 1em;
          color: rgba(0, 0, 0, 0.4);
        }
        .description {
          text-align: justify;
          p {
            padding: 0.8em 0.5em 0;
            line-height: normal;
            -webkit-margin-before: 0;
            -webkit-margin-after: 0;
          }
        }
      }
      .interests {
        padding: 1em 1.5em;
        border-top: 1px solid rgba(34, 36, 38, 0.1);
      }
      .socials {
        border-top: 1px solid rgba(34, 36, 38, 0.1);
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        img {
          width: 32px;
          margin: 1em;
          cursor: pointer;
        }
      }
      .actions {
        border-top: 1px solid rgba(34, 36, 38, 0.1);
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        .button {
          background-color: #b53471;
          border: none;
          border-radius: 0.3em;
          color: #fff;
          padding: 0.5em 1em;
          margin: 1em 0.5em;
          font-size: 1rem;
          font-family: inherit;
          font-weight: 400;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          transition-duration: 0.4s;
          cursor: pointer;
        }
      }
    }
  }
}
a,
p a code {
  color: #0984e3;
}
a {
  font-weight: 500;
  text-decoration: none;
}
</style>