import mongodb from 'mongodb';
// eslint-disable-next-line no-unused-vars
import Collection from 'mongodb/lib/collection';
import envLoader from './env_loader';

/**
 * Represents a database connection.
 */

class DBClient {
    /**
     * Creates a new DBClient instance.
     */
    constructor() {
        envLoader();
        const host = process.env.DB_HOST || 'localhost';
        const port = process.env.DB_PORT || 27017;
        const database = process.env.DB_DATABASE || 'files_manager';
        const dbURL = `mongodb://${host}:${port}/$database}`;

        this.client = new mongodb.MongoClient(dbURL, { useUnifiedTopology: true});
        this.client.connect();
    }
}