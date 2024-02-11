pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'aquilacms/aquilacms'
        MONGO_IMAGE = 'mongo:latest'
        NETWORK_NAME = 'aquila'
        MONGO_CONTAINER_NAME = 'mongo'
        AQUILACMS_CONTAINER_NAME = 'aquilacms'
        LOAD_BALANCER_NAME = 'aquilacms-lb'
    }

    // stages {
    //     stage('Clone Repository') {
    //         steps {
    //             script {
    //                 // Clone AquilaCMS repository from GitHub
    //                 git 'https://github.com/your-username/your-aquilacms-repo.git'
    //             }
    //         }
    //     }

        stage('Setup') {
            steps {
                script {
                    // Create Docker network
                  echo 'Setting up environment...'

                    sh "docker network create ${aquila}"
                }
            }
        }

        stage('Start MongoDB') {
            steps {
                script {
                    // Run MongoDB container
                  echo 'starting mongo container...'

                  // docker run -d --name mongo -p 27017:27017 --network=aquila mongo

                    sh "docker run -d --name mongo -p 27017:27017 --network=aquila mongo"
                  
                }
            }
        }

        stage('Build and Run AquilaCMS') {
            steps {
                script {
                    // Build and run AquilaCMS container
                  echo 'running aquila container'
                    sh "docker build -t aquilacms/aquilacms ."
                  
                  
                    sh "docker run -p 127.0.0.1:3010:3010/tcp --network=aquila --name aquila aquilacms/aquilacms"
                }
            }
        }

        stage('Setup Load Balancer') {
            steps {
                script {

                  echo 'started the alb'
                  http://alb-828578710.ap-northeast-1.elb.amazonaws.com/checkout/login?redirect=/checkout/address
                    
                    // Configure and deploy load balancer
                    // This step depends on your cloud provider's load balancer service
                    // For AWS, you would use AWS CLI or AWS SDK to create and configure an Application Load Balancer
                    // Here, we'll assume the load balancer is already configured externally
                    // Once configured, update DNS or route traffic to the load balancer
                }
            }
        }
}

