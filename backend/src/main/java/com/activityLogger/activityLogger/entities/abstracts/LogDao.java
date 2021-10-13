package com.activityLogger.activityLogger.entities.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import com.activityLogger.activityLogger.entities.concretes.Log;


public interface LogDao extends JpaRepository<Log, Integer> {

}
