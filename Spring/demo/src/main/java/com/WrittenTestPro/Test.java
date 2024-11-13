package com.WrittenTestPro;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//for add the test

@Entity
public class Test {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	String name;
	Date start;
	Date end;
	int questionCount;
	int passingCount;
	String result;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getStart() {
		return start;
	}
	public void setStart(Date start) {
		this.start = start;
	}
	public Date getEnd() {
		return end;
	}
	public void setEnd(Date end) {
		this.end = end;
	}
	public int getQuestionCount() {
		return questionCount;
	}
	public void setQuestionCount(int questionCount) {
		this.questionCount = questionCount;
	}
	public int getPassingCount() {
		return passingCount;
	}
	public void setPassingCount(int passingCount) {
		this.passingCount = passingCount;
	}
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	@Override
	public String toString() {
		return "Test [id=" + id + ", name=" + name + ", start=" + start + ", end=" + end + ", questionCount="
				+ questionCount + ", passingCount=" + passingCount + ", result=" + result + "]";
	}
	public Test(int id, String name, Date start, Date end, int questionCount, int passingCount, String result) {
		super();
		this.id = id;
		this.name = name;
		this.start = start;
		this.end = end;
		this.questionCount = questionCount;
		this.passingCount = passingCount;
		this.result = result;
	}
	public Test() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
