pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'ng build --prod'
      }
    }
    stage('Deploy') {
      steps {
        sh '''rm /var/www/dzialania/*
cp -R dist/dzialania /var/www/dzialania'''
      }
    }
  }
}