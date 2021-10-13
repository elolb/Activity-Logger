package com.activityLogger.activityLogger.entities.concretes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="activities")
public class Activity {

	@Id
	@GeneratedValue
	@Column(name="activity_id")
	private int id;

	@Column(name="activity_name")
	private String activityName;
	
	
	public Activity() {}
	public Activity(int id, String activityName) {
		super();
		this.id = id;
		this.activityName = activityName;
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
}
