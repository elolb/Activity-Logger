package com.activityLogger.activityLogger.business.concretes;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.activityLogger.activityLogger.business.abstracts.LogService;
import com.activityLogger.activityLogger.entities.abstracts.LogDao;
import com.activityLogger.activityLogger.entities.concretes.Log;

@Service
public class LogManager implements LogService {

	private LogDao logDao;
	
	@Autowired
	public LogManager(LogDao logDao) {
		super();
		this.logDao = logDao;
	}
	
	@Override
	public List<Log> getAll() {
		return this.logDao.findAll();
	}
	
	@Override
	public Log save(Log newLog) {
		return logDao.save(newLog);
	}

	@Override
	public Optional<Log> findById(Integer id) {
		return logDao.findById(id);
	}

	@Override
	public void deleteById(Integer id) {	
		logDao.deleteById(id);
	}
	
	public void deleteAll() {
		logDao.deleteAll();
	}

	@Override
	public long getCurrentTime() {
		return System.currentTimeMillis();
	}
}
