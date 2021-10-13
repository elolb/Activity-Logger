package com.activityLogger.activityLogger.entities.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import com.activityLogger.activityLogger.entities.concretes.Activity;

public interface ActivityDao  extends JpaRepository<Activity, Integer>{

}
