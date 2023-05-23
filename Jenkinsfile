pipeline {
    agent any

    stages {
        stage('Build') {
             steps {
                sh 'bat' 
                archiveArtifacts artifacts: 'Dockerfile', fingerprint: true 
            }
        }
        stage('Test') {
            steps {
                sh 'bat' 
                archiveArtifacts artifacts: 'script.js', fingerprint: true 
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}