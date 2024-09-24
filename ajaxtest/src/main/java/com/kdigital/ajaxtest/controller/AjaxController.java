package com.kdigital.ajaxtest.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AjaxController {
	
	// 첫 번째 요청
	@GetMapping("/ajaxReq1")
	@ResponseBody // 포워딩 방식이 아님을 나타내는 Annotation
	public String ajaxReq1() {
		System.out.println("Req1 요청 수신");
		
		return "OK!"; // `문자열`(OK.html이 아님 문자데이터 "OK"임)을 클라이언트에게 송신
	}
	
	// 두 번째 요청
	@GetMapping("/ajaxReq2")
	@ResponseBody
	public Map<String, String> ajaxReq2(
		@RequestParam(name="name") String name
		, @RequestParam(name="phone") String phone
		) {
		System.out.println(name + "/" + phone);
		
		Map<String, String> map = new HashMap<>();
		// 자바에 json이 없어서 대체제인 맵을 쓴다는 듯
		map.put("name", name + "님");
		map.put("phone", phone);
		
		return map;
	}
	
	
	// 세 번째 요청
	@GetMapping("/ajaxReq3")
	@ResponseBody
	public List<String> ajaxReq3() {
		List<String> list = Arrays.asList("사과","복숭아", "메론", "수박", "딸기");

		return list;
	}

}
