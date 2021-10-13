package com.activityLogger.activityLogger.business.concretes;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.activityLogger.activityLogger.business.abstracts.ActivityService;
import com.activityLogger.activityLogger.entities.abstracts.ActivityDao;
import com.activityLogger.activityLogger.entities.concretes.Activity;

@Service
public class ActivityManager implements ActivityService{

	private ActivityDao activityDao;
	
	@Autowired
	public ActivityManager(ActivityDao activityDao) {
		super();
		this.activityDao = activityDao;
	}

	@Override
	public List<Activity> getAll() {
		return this.activityDao.findAll();
	}

	@Override
	public Activity save(Activity newActivity) {
		return activityDao.save(newActivity);
	}

	@Override
	public Optional<Activity> findById(Integer id) {
		return activityDao.findById(id);
	}

	@Override
	public void deleteById(Integer id) {
		activityDao.deleteById(id);
		
	}

	@Override
	public void deleteAll() {
		activityDao.deleteAll();
		
	}

}
