<template>
	<view class="content">
		
		
		<input type="text" value="">Thank you for your payment!As payment return,we send you a Loan VIP Card to you </input>
			<view class="box">
				<view class="one">All loan products Passing Rate increases 30%</view>
				<view class="two">Loan interest of loan peoducts decreases 20%</view>
				<view class="three">Disbursal time decrease 40%,as fase as 1 minute</view>
			</view>
		<view class="box1">
			<input type="text" value="">According to your profile,we use machine-learning alogrithm to precluded <i>38</i> loan
			products to save your application time!</input>
			<p>
				Through our VIP channel,you will get:
				<p>1.All loan products Passing Rate increases <i>30%,as high as 87.23%!</i></p>
				<p>2.Loan interest of loan products decreases <i>20%,daily interest as low as 0.01%</i></p>
				<p>3.Disbursal time decreases <i>40%,as fast as 1 minute</i></p>
			</p>
		</view>
		<view class="box2">
			<i>Customer Service</i>
		</view>
		<view class="line"></view>
		<view class="box3">
			<image src="../../static/icons/vip.png" ></image><text>VIP Only</text>
		</view>
			<view class="line1"></view>
			<view class="box4" >
				<view class="box4_top" >
					<image src="../../static/icons/kefu.png"></image>
					<text class="zi">Gin Teenpatti$Rummy Game</text>
					<text>Monthly rate:</text>
					<!-- <image src="../../static/icons/kefu.png" mode=""></image> -->
				</view>
				<text class="zi1">Max:1,000</text>
			<view class="box4_bottom">
				<text>1000rs...</text>
				<button type="default"
				>
					Vip Only
					</button>
			</view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List:[]
			}
		},
		onLoad() {
this.getVipList()
		},
		methods: {
async getVipList(){
	const res = await this.$myRequest({
		url:'/cmVars/getVariableInfoByKey',
		params:{
			key:'LOAN-MARKET_MSG_en-IN_LOAN_loanList',
			format:'api'
		},
	})
	console.log(res.data)
	this.List = res.data.LOAN-MARKET_MSG_en-IN_LOAN_loanList.list
}
		}
	}
</script>

<style>
	.content {
		border: 1px solid red;
		width: 380px;
		height: 200px;
		margin: auto;
		border-radius: 15px;
		text-align: center;
		background-color:lightblue;
	}
	.box{
		display: flex;
		justify-content: space-around;
		align-items: center;
		
	}
	.box .one,.two,.three {
	width: 90px;
	height: 90px;
	border-radius: 10px;
	background-color: orange;
	display: flex;
	align-items: center;
	font-size: 10px;
	color: white;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-top: 20px;
    }
.box1{
		text-align: left;
	}
	.box1 input{
		margin-bottom: 20px;
	}
	i{
		font-size: 15px;
		color: orange;
	}
	.box2{
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.box3{
		text-align: left;
		/* margin-left: 10px; */
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.line{
		height: 10px;
		background-color: lightgray;
		width: 100vw;
	}
	.line1{
		height: 5px;
		background-color: lightgray;
		width: 100vw;
	}
	.box3 image{
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	
	.box4_top{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
	}
	.box4_top text:last-child{
		color: lightgray;
	}
	.box4_top .zi{
		font-weight: bold;
		font-size: 20px;
		text-align: left
	}
	.box4 .zi1{
		display: flex;
	}
	.box4_bottom{
		display: flex;
		justify-content: space-between;
		
	}
	.box4 image{
		width: 20px;
		height: 20px;
		margin-right: 10px;
	}
	.box4_bottom button{
		background-color: white;
		border-radius: 25px;
		border: 2px solid orange;
		width: 150px;
		height: 30px;
		line-height: 30px;
		color: orange;
		margin-right: 10px;
	}
</style>
