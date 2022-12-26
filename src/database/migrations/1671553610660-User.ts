import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class User1671553610660 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "photo",
                    type: "varchar",
                    length: "255",
                    isNullable: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                    isNullable: false
                },
                {
                    name: "phone",
                    type: "varchar",
                    length: "20",
                    isNullable: false,
                },
                {
                    name: "document",
                    type: "varchar",
                    length: "14",
                    isNullable: false,
                },
                {
                    name: 'createdAt',
                    type: 'datetime',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updatedAt',
                    type: 'datetime',
                    default: 'CURRENT_TIMESTAMP',
                }
            ]
        }));


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
