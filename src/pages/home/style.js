import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;//触发BFC，能自动识别高度
  width: 960px;
  margin: 0 auto;                           
`;

export const HomeLeft = styled.div`
  width: 640px;
  padding: 30px 0 0 15px;
  float: left;
  .banner-img {
    width: 640px;
    height:300px;

  }
`;

export const HomeRight = styled.div`
  width: 280px;
  padding: 30px 0 0 0px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden; //为了触发BFC，自动识别高度
  margin-left: -18px;
  border-bottom: 1px solid #f0f0f0
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #f7f7f7;
  padding-right: 10px; 
  margin-left: 18px;
  margin-bottom: 18px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    width: 32px;
    height: 32px;
    margin-right: 10px;
    //vertical-align: middle;
    display:block;
    float: left;
  }
 `;

export const ListItem = styled.div`
  width: 625px;
  margin-top: 15px;
  .router {
    text-decoration: none;
  }
`;

export const ListInfo = styled.div`
  overflow: hidden;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 15px;
  padding-bottom: 20px;
  .pic{
    width: 150px;
    height: 100px;
    display: block;
    float: right;
    margin-left: 10px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
  .title{
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    color: #333;
  }
  .desc{
    font-size: 13px;
    line-height: 24px;
    color: #999;
    margin: 0 0 8px;
  }
`;

export const RecItem = styled.div`
  margin-top: -4px;
  width: 280px;
  padding-bottom: 4px;
  .rec-pic{
    width: 280px;
    display: block;
    margin-bottom: 6px
   }
`;

export const RecList = styled.a`
    width: 280px;
    height: 50px;
    display: block;
    margin-bottom: 6px;
    background: url(${(props) => props.imgUrl}) no-repeat;
    background-size: contain;
`;

export const LoadMore = styled.div`
  margin: 30px 0 60px 0;
  width: 625px;;
  height: 40px;
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
  background: #a5a5a5;
  line-height: 40px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid #dcdcdc;
  .backTop {
    position: absolute;
    width: 80px;
    height: 30px;
    top: 10px;    
    left: -90px;
    font-size: 14px;
    background: rgba(1,1,1,0.7);
    color: #fff;
    border-radius: 5px;
    line-height: 30px;
  }
  .hideTips {
    display: none;
    }
`