package com.activityLogger.activityLogger.entities.concretes;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="histories")
public class Log {
	@Id
	@GeneratedValue
	@Column(name="history_id")
	private int id;

	@Column(name="activity_name")
	private String activityName;
	
	@Column(name="date")
	private long date;
	
	public Log() {}
	public Log(int id, String activityName, long date) {
		super();
		this.id = id;
		this.activityName = activityName;
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getActivityName() {
		return activityName;
	}

	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}

	public long getDate() {
		return date;
	}

	public void setDate(long date) {
		this.date = date;
	}
	
	
	
}
