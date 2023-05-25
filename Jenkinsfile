pipeline {
      agent {
        docker { image 'node:18.16.0-alpine' }
    }

    stages {
        stage('Build') {
            steps {
            sh 'node --version'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
