import React from "react"

function App() {

	const clickEvent = (e) => {
		e.preventDefault();
		const data = [
			{key:0, pgNo:0, pgNm: "ZBC0151", pgLang:"EN", pgType:"A", DateTime:14496, pgVariant:null},
			{key:1, pgNo:1, pgNm: "ZBC0151", pgLang:"EN", pgType:"A", DateTime:11496, pgVariant:null}
		]
		const dataList = [
			{key:0, pgNo:2, pgNm: "ZBC0151", pgLang:"EN", pgType:"A", DateTime:15496, pgVariant:null},
			{key:1, pgNo:1, pgNm: "ZBC0151", pgLang:"EN", pgType:"A", DateTime:13496, pgVariant:null},
			{key:2, pgNo:0, pgNm: "ZBC0151", pgLang:"EN", pgType:"A", DateTime:12496, pgVariant:null}
		]

		const oneTemp = []
		const oneDataList = []
		
		data.map(v => {
			oneTemp.push(v.pgNo)

			let typeData = ""
			if(v.pgType == "A"){
				typeData = "ABAP"
			}
			oneDataList.push(
				v.pgNm + "/" + typeData + "/" + v.pgVariant + "/" + v.pgLang
			)
		})
		const dataListTemp = []
		const dataChangeList = []

		dataList.map(v => {
			dataListTemp.push(v.pgNo)
			dataChangeList.push(
				v.pgNm + "/" + v.pgType + "/" + v.pgVariant + "/" + v.pgLang
			)
		})

		let sum = 0;  //순서 확인 
		oneTemp.map((v, i) => {
			if(v != dataListTemp[i]){
				sum += 1
			}
		})
		
		let changeSum = 0
		oneDataList.forEach(function(index, i){ // 길이는 같지만 내용이 다른 경우
			if(index != dataChangeList[i]){
				changeSum += 1
			}
		})

		let dataLength = false        // 데이터 리스트 총 길이
		let countNumber = false       // 데이터 순서
		let changeDataForm = false    // 데이터 내용이 다른 경우

		if(dataListTemp.length > 0) {
			if(oneTemp.length != dataListTemp.length){
				dataLength = true
			} else {
				dataLength = false
			}
		}
		if(sum > 0){
			countNumber = true
		} else {
			countNumber = false
		}

		if(changeSum > 0){
			changeDataForm = true
		}

		console.log(dataLength)
		console.log(countNumber)
		console.log(changeDataForm)
	}

	return (
		<div>
			<button onClick={clickEvent}>테스트</button>
		</div>
	);
}

export default App;
