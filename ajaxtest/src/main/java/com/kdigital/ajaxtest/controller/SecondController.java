package com.kdigital.ajaxtest.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kdigital.ajaxtest.dto.CustomerDTO;

@Controller
public class SecondController {
	@GetMapping("/secondpage")
	public String secondpage() {
		return "second";
	}
	
	@GetMapping("/receive")
	@ResponseBody
	public List<CustomerDTO> receive() {
		
		List<CustomerDTO> list = Arrays.asList(
				new CustomerDTO("홍길동", "hong@naver.com", "010-1111-2222")
				, new CustomerDTO("이여자", "lee@naver.com", "010-1111-3333")
				, new CustomerDTO("조양조", "yang@naver.com", "010-1111-4444")
				, new CustomerDTO("신갱호", "gang@naver.com", "010-1111-5555")
				);
				
		return list;
	}

}
