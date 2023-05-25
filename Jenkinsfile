pipeline {
      agent {
        docker { image 'node:18.16.0-alpine' }
    }

    stages {
        stage('Build') {
            steps {
            echo 'Building....'
            }
        }
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
