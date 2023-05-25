pipeline {
    agent {
        docker { image 'node:18.16.0-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
              dir('foo') {
                sh 'pwd -P'
            }
        }
        stage('Build'){
            steps{
                 echo'building completed'
            }
        
        }
       
    }
     
}
