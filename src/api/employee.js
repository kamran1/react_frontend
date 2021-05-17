import request from './request';

// By Kamran Majeed 


export function createEmployees(data) {
	return request({
	  url: "/employees",
	  method: "post",
	  data,
	});
  }
  export function fetchEmployees(query) {
	return request({
	  url: "/employees",
	  method: "get",
	  params: query,
	});
  }

  export function fetchDepartments(query) {
	return request({
	  url: "/departments",
	  method: "get",
	  params: query,
	});
  }
  
// Kamran Majeed 