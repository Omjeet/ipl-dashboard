package com.example.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

	Team findByTeamName(String teamName);
}
