pipeline {
    dockerfile {
       filename 'Dockerfile.build'
        dir 'build'
   
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
