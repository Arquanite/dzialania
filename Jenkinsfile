pipeline {
  agent any
  stages {
    stage('install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('build') {
      steps {
        sh 'ng build --prod'
      }
    }
  }
}